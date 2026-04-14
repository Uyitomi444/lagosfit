import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Added Storage import

// IMPORTANT: Replace these with your actual Firebase project credentials
// Go to https://console.firebase.google.com → Create Project → Project Settings → "Your apps" → Web app
// Aggressive sanitizer to clean corrupted environment variables from Vercel
const sanitize = (val: string | undefined, keyName?: string) => {
    if (!val) return "";
    
    // 1. Remove literal placeholders and control characters
    let cleaned = val
        .replace(/%H DOMAIN%/g, '')
        .replace(/%09/g, '')
        .replace(/YOUR_API_KEY/g, '')
        .replace(/YOUR_PROJECT_ID/g, '')
        .replace(/YOUR_APP_ID/g, '')
        .trim();

    // 2. If it's an authDomain and it still looks corrupted or contains placeholders, reconstruct it
    if (keyName === 'authDomain' && (cleaned.includes('%') || !cleaned.includes('.') || cleaned.length < 5)) {
        const projectId = sanitize(import.meta.env.VITE_FIREBASE_PROJECT_ID);
        if (projectId && !projectId.includes('%')) {
            cleaned = `${projectId}.firebaseapp.com`;
        } else {
            // Absolute fallback for this specific project
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
