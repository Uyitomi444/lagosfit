import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───
// Sign up at https://www.emailjs.com and fill these in:
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

/**
 * Send a welcome email to a newly upgraded premium user.
 *
 * Template variables you should set up in your EmailJS template:
 *   {{to_email}}   – recipient email
 *   {{user_name}}  – user's display name
 *   {{plan_name}}  – "Monthly" or "Yearly"
 *   {{amount}}     – e.g. "5,000" or "36,000"
 *   {{reference}}  – Paystack transaction reference
 */
export const sendWelcomeEmail = async (params: {
    email: string;
    name: string;
    planName: string;
    amount: string;
    reference: string;
}): Promise<boolean> => {
    const { email, name, planName, amount, reference } = params;

    // If EmailJS isn't configured, log and skip silently
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.log(
            '[Email] EmailJS not configured. Skipping welcome email for:',
            email
        );
        return false;
    }

    try {
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                to_email: email,
                user_name: name || 'Premium User',
                plan_name: planName,
                amount: `₦${amount}`,
                reference: reference,
            },
            EMAILJS_PUBLIC_KEY
        );

        console.log('[Email] Welcome email sent successfully to', email);
        return true;
    } catch (err) {
        console.error('[Email] Failed to send welcome email:', err);
        return false;
    }
};
