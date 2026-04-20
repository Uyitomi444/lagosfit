
// Monnify integration utility
// Docs: https://teamapt.atlassian.net/wiki/spaces/MON/pages/212913357/Monnify+Web+SDK

declare global {
    interface Window {
        MonnifySDK: {
            initialize: (config: any) => void;
        };
    }
}

const MONNIFY_API_KEY = import.meta.env.VITE_MONNIFY_API_KEY || '';
const MONNIFY_CONTRACT_CODE = import.meta.env.VITE_MONNIFY_CONTRACT_CODE || '';

let scriptLoaded = false;
const loadMonnifyScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (scriptLoaded) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://sdk.monnify.com/plugin/monnify.js';
        script.onload = () => {
            scriptLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load Monnify SDK'));
        document.head.appendChild(script);
    });
};

export const initializeMonnify = async (options: any) => {
    const { email, amount, name, userId, plan, onSuccess, onCancel } = options;

    if (!MONNIFY_API_KEY || !MONNIFY_CONTRACT_CODE) {
        throw new Error('Monnify is not configured');
    }

    await loadMonnifyScript();

    window.MonnifySDK.initialize({
        amount: amount / 100, // Monnify uses Naira, not Kobo
        currency: "NGN",
        reference: `LF-${Date.now()}`,
        customerFullName: name || "LagosFit User",
        customerEmail: email,
        apiKey: MONNIFY_API_KEY,
        contractCode: MONNIFY_CONTRACT_CODE,
        paymentDescription: `LagosFit Pro - ${plan}`,
        metadata: {
            "userId": userId,
            "plan": plan
        },
        onComplete: (response: any) => {
            if (response.paymentStatus === 'PAID') {
                onSuccess(response.transactionReference);
            }
        },
        onClose: () => {
            onCancel();
        }
    });
};
