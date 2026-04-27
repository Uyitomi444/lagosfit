import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Added Storage import

// IMPORTANT: Replace these with your actual Firebase project credentials
// Go to https://console.firebase.google.com → Create Project → Project Settings → "Your apps" → Web app
// Aggressive sanitizer to clean corrupted environment variables from Vercel
const sanitize = (val: string | undefined, keyName?: string) => {
    if (!val) return "";
    
    // 1. Aggressive removal of common Vercel corruption patterns
    let cleaned = val
        .replace(/%H DOMAIN%/gi, '')
        .replace(/H_DOMAIN/gi, '')
        .replace(/%09/gi, '');

    // Only strip placeholders if they are the literal "your_..." strings
    if (cleaned.toLowerCase().includes('your_api_key') || cleaned === 'working') {
        return "";
    }

    // 2. Specialized extraction for authDomain
    if (keyName === 'authDomain') {
        const projectId = sanitize(import.meta.env.VITE_FIREBASE_PROJECT_ID, 'projectId');
        if (projectId && !projectId.includes('%') && !projectId.includes('H_')) {
            cleaned = `${projectId}.firebaseapp.com`;
        } else {
            cleaned = "lagosfit-ec59a.firebaseapp.com";
        }
    }
    return cleaned;
};

const firebaseConfig = {
    apiKey: sanitize(import.meta.env.VITE_FIREBASE_API_KEY, 'apiKey'),
    authDomain: sanitize(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, 'authDomain'),
    projectId: sanitize(import.meta.env.VITE_FIREBASE_PROJECT_ID, 'projectId'),
    storageBucket: sanitize(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, 'storageBucket'),
    messagingSenderId: sanitize(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, 'messagingSenderId'),
    appId: sanitize(import.meta.env.VITE_FIREBASE_APP_ID, 'appId')
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Added storage export
export const googleProvider = new GoogleAuthProvider();

// Configure Google provider for best UX
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export default app;
