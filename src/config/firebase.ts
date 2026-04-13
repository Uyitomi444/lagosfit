import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Added Storage import

// IMPORTANT: Replace these with your actual Firebase project credentials
// Go to https://console.firebase.google.com → Create Project → Project Settings → "Your apps" → Web app
// Helper to clean potentially corrupted environment variables from Vercel
const sanitize = (val: string | undefined) => {
    if (!val) return "";
    // Remove weird placeholders like '%H DOMAIN%' or '%09' (tabs) and whitespace
    return val.replace(/%H DOMAIN%/g, '').replace(/%09/g, '').trim();
};

const firebaseConfig = {
    apiKey: sanitize(import.meta.env.VITE_FIREBASE_API_KEY),
    authDomain: sanitize(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
    projectId: sanitize(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    storageBucket: sanitize(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: sanitize(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
    appId: sanitize(import.meta.env.VITE_FIREBASE_APP_ID)
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
