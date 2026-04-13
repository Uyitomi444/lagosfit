import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Added Storage import

// Production Fallbacks for Vercel (Auto-pushed)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBnIqUuqY1TKZTNAVv-jDoPT57BynDV3V0",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "lagosfit-ec59a.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "lagosfit-ec59a",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "lagosfit-ec59a.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "653857150490",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:653857150490:web:ec23fd5c4a1296b29363a3"
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
