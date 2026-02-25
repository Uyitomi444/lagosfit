// Paystack inline payment integration
// Uses the Paystack Inline JS script (no React wrapper needed)

declare global {
    interface Window {
        PaystackPop: {
            setup: (config: PaystackConfig) => { openIframe: () => void };
        };
    }
}

interface PaystackConfig {
    key: string;
    email: string;
    amount: number; // in kobo (₦1 = 100 kobo)
    currency: string;
    ref: string;
    metadata: {
        custom_fields: { display_name: string; variable_name: string; value: string }[];
    };
    callback: (response: PaystackResponse) => void;
    onClose: () => void;
}

export interface PaystackResponse {
    reference: string;
    status: string;
    trans: string;
    transaction: string;
    message: string;
}

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';

// ─── Pricing Plans ───
export type PlanKey = 'monthly' | 'yearly';

export interface PricingPlan {
    key: PlanKey;
    name: string;
    amount: number;        // in kobo
    displayPrice: string;  // formatted price
    perMonth: string;      // monthly equivalent
    period: string;
    badge?: string;        // e.g., "SAVE 40%"
    popular?: boolean;
}

export const PLANS: Record<PlanKey, PricingPlan> = {
    monthly: {
        key: 'monthly',
        name: 'Monthly',
        amount: 500000,          // ₦5,000
        displayPrice: '5,000',
        perMonth: '5,000',
        period: 'month',
    },
    yearly: {
        key: 'yearly',
        name: 'Yearly',
        amount: 3600000,         // ₦36,000 (₦3,000/mo × 12)
        displayPrice: '36,000',
        perMonth: '3,000',
        period: 'year',
        badge: 'SAVE 40%',
        popular: true,
    }
};

// Load Paystack script dynamically
let scriptLoaded = false;
const loadPaystackScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (scriptLoaded && window.PaystackPop) {
            resolve();
            return;
        }

        const existingScript = document.querySelector('script[src*="paystack"]');
        if (existingScript) {
            scriptLoaded = true;
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        script.onload = () => {
            scriptLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load Paystack'));
        document.head.appendChild(script);
    });
};

// Generate a unique transaction reference
const generateReference = (): string => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `LF-${timestamp}-${random}`.toUpperCase();
};

export interface PaymentOptions {
    email: string;
    userId: string;
    plan: PlanKey;
    onSuccess: (reference: string) => void;
    onCancel: () => void;
}

export const initializePayment = async (options: PaymentOptions): Promise<void> => {
    const { email, userId, plan, onSuccess, onCancel } = options;

    if (!PAYSTACK_PUBLIC_KEY) {
        console.error('Paystack public key not configured');
        throw new Error('Payment is not configured. Please contact support.');
    }

    const selectedPlan = PLANS[plan];
    await loadPaystackScript();

    const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: selectedPlan.amount,
        currency: 'NGN',
        ref: generateReference(),
        metadata: {
            custom_fields: [
                {
                    display_name: 'User ID',
                    variable_name: 'user_id',
                    value: userId
                },
                {
                    display_name: 'Plan',
                    variable_name: 'plan',
                    value: plan
                },
                {
                    display_name: 'Plan Name',
                    variable_name: 'plan_name',
                    value: selectedPlan.name
                }
            ]
        },
        callback: (response: PaystackResponse) => {
            if (response.status === 'success') {
                onSuccess(response.reference);
            }
        },
        onClose: () => {
            onCancel();
        }
    });

    handler.openIframe();
};
