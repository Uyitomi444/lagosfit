import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion,
    serverTimestamp
} from 'firebase/firestore';
import { auth, db, googleProvider } from '../config/firebase';
import type { QuizHistoryItem } from '../types';

// App-level user shape
export interface AppUser {
    uid: string;
    email: string | null;
    name: string | null;
    photoURL: string | null;
    isPremium: boolean;
}

interface AuthContextType {
    user: AppUser | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    logout: () => void;
    resetPassword: (email: string) => Promise<void>;
    saveQuizHistory: (item: QuizHistoryItem) => Promise<void>;
    getQuizHistory: () => Promise<QuizHistoryItem[]>;
    upgradeToPremium: (paymentReference: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper: map Firebase user to our AppUser shape
const mapUser = (firebaseUser: FirebaseUser, premium = false): AppUser => ({
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    isPremium: premium,
});

// Helper: ensure a user doc exists in Firestore
const ensureUserDoc = async (firebaseUser: FirebaseUser) => {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const snap = await getDoc(userRef);
    if (!snap.exists()) {
        await setDoc(userRef, {
            email: firebaseUser.email,
            name: firebaseUser.displayName || '',
            photoURL: firebaseUser.photoURL || '',
            createdAt: serverTimestamp(),
            quizHistory: []
        });
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState(true);

    // Listen to Firebase auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                await ensureUserDoc(firebaseUser);
                // Check premium status from Firestore
                let isPremium = false;
                try {
                    const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
                    if (snap.exists()) {
                        isPremium = snap.data().isPremium === true;
                    }
                } catch (err) {
                    console.error('Failed to check premium status:', err);
                }
                setUser(mapUser(firebaseUser, isPremium));
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Email + Password Registration
    const register = async (name: string, email: string, password: string) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
        await ensureUserDoc(cred.user);
        setUser(mapUser(cred.user));
    };

    // Email + Password Login
    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    // Google Sign-In
    const loginWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        await ensureUserDoc(result.user);
    };

    // Logout
    const logout = () => {
        signOut(auth);
    };

    // Forgot Password
    const resetPassword = async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    };

    // Save quiz result to Firestore
    const saveQuizHistory = useCallback(async (item: QuizHistoryItem) => {
        if (!user) return;
        try {
            const userRef = doc(db, 'users', user.uid);
            await updateDoc(userRef, {
                quizHistory: arrayUnion({
                    ...item,
                    savedAt: new Date().toISOString()
                })
            });
        } catch (err) {
            console.error('Failed to save quiz history to Firestore:', err);
        }
    }, [user]);

    // Fetch quiz history from Firestore
    const getQuizHistory = useCallback(async (): Promise<QuizHistoryItem[]> => {
        if (!user) return [];
        try {
            const userRef = doc(db, 'users', user.uid);
            const snap = await getDoc(userRef);
            if (snap.exists()) {
                return (snap.data().quizHistory || []) as QuizHistoryItem[];
            }
        } catch (err) {
            console.error('Failed to fetch quiz history from Firestore:', err);
        }
        return [];
    }, [user]);

    // Upgrade to premium after successful payment
    const upgradeToPremium = useCallback(async (paymentReference: string) => {
        if (!user) throw new Error('Must be logged in to upgrade');
        try {
            const userRef = doc(db, 'users', user.uid);
            await updateDoc(userRef, {
                isPremium: true,
                premiumUpgradedAt: serverTimestamp(),
                paymentReference
            });
            // Update local user state
            setUser(prev => prev ? { ...prev, isPremium: true } : null);
        } catch (err) {
            console.error('Failed to upgrade to premium:', err);
            throw err;
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{
            user, loading, login, register, loginWithGoogle,
            logout, resetPassword, saveQuizHistory, getQuizHistory,
            upgradeToPremium
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
