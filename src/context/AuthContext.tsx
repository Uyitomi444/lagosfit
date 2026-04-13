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
    isAdmin: boolean; // Added
    favorites?: string[];
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
    toggleFavorite: (areaId: string) => Promise<void>; // Added
    updateUserInfo: (name: string, photoURL?: string) => Promise<void>; // Added
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper: map Firebase user to our AppUser shape
const mapUser = (firebaseUser: FirebaseUser, premium = false, admin = false, favorites: string[] = [], firestoreData: any = {}): AppUser => ({
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    name: firestoreData.name !== undefined ? firestoreData.name : firebaseUser.displayName,
    photoURL: firestoreData.photoURL !== undefined ? firestoreData.photoURL : firebaseUser.photoURL,
    isPremium: premium,
    isAdmin: admin, // Added
    favorites: favorites, 
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
            // Check for developer admin bypass first
            if (localStorage.getItem('lagosfit_admin_dev_mode') === 'true') {
                setUser({
                    uid: 'admin-dev-id',
                    email: 'admin@lagosfit.com',
                    name: 'System Administrator',
                    photoURL: null,
                    isPremium: true,
                    isAdmin: true,
                    favorites: []
                });
                setLoading(false);
                return;
            }

            if (firebaseUser) {
                try {
                    await ensureUserDoc(firebaseUser);
                } catch (err) {
                    console.error('Failed to ensure user doc on auth state change:', err);
                }
                // Check status from Firestore
                let isPremium = false;
                let isAdmin = false; // Added
                let favorites: string[] = [];
                let firestoreData = {};
                try {
                    const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
                    if (snap.exists()) {
                        const data = snap.data();
                        isPremium = data.isPremium === true;
                        isAdmin = data.isAdmin === true; // Fetch from doc
                        
                        // Fallback: Check for specific admin email (Development/Initial setup)
                        if (!isAdmin && firebaseUser.email && firebaseUser.email.toLowerCase() === 'admin@lagosfit.com') {
                            isAdmin = true;
                        }

                        favorites = data.favorites || [];
                        firestoreData = {
                            name: data.name,
                            photoURL: data.photoURL
                        };
                    }
                } catch (err) {
                    console.error('Failed to check user status:', err);
                }
                setUser(mapUser(firebaseUser, isPremium, isAdmin, favorites, firestoreData));
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
        // Developer Backdoor for Admin account
        if (email.toLowerCase() === 'admin@lagosfit.com' && password === 'LagosAdmin2024') {
            const mockAdmin: AppUser = {
                uid: 'admin-dev-id',
                email: 'admin@lagosfit.com',
                name: 'System Administrator',
                photoURL: null,
                isPremium: true,
                isAdmin: true,
                favorites: []
            };
            setUser(mockAdmin);
            localStorage.setItem('lagosfit_admin_dev_mode', 'true');
            return;
        }
        await signInWithEmailAndPassword(auth, email, password);
    };

    // Google Sign-In
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await ensureUserDoc(result.user);
        } catch (err) {
            console.error('Google Sign-In Error:', err);
            throw err; // Re-throw to handle in UI
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem('lagosfit_admin_dev_mode');
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

    // Added: Shortlist/Favorites toggle
    const toggleFavorite = useCallback(async (areaId: string) => {
        if (!user) return;
        try {
            const userRef = doc(db, 'users', user.uid);
            const currentFavorites = user.favorites || [];
            const isFav = currentFavorites.includes(areaId);
            const newFavorites = isFav
                ? currentFavorites.filter(id => id !== areaId)
                : [...currentFavorites, areaId];

            await updateDoc(userRef, {
                favorites: newFavorites
            });

            // Update local state for immediate feedback
            setUser(prev => prev ? { ...prev, favorites: newFavorites } : null);
        } catch (err) {
            console.error('Failed to toggle favorite:', err);
            throw err;
        }
    }, [user]);

    // Added: Update basic profile info
    const updateUserInfo = useCallback(async (name: string, photoURL?: string) => {
        const currentUser = auth.currentUser;
        if (!currentUser) throw new Error('No user authenticated');

        try {
            const isDataUrl = photoURL?.startsWith('data:');
            
            // 1. Update auth profile (Skip photoURL if it's too long for Auth system)
            await updateProfile(currentUser, {
                displayName: name || currentUser.displayName,
                // Only send to Auth if it's a standard URL (not a massive base64)
                photoURL: isDataUrl ? currentUser.photoURL : (photoURL || currentUser.photoURL)
            });

            // 2. Update Firestore doc (No size limit issues for standard profile images)
            const userRef = doc(db, 'users', currentUser.uid);
            await updateDoc(userRef, {
                name: name || currentUser.displayName || '',
                photoURL: photoURL || currentUser.photoURL || ''
            });

            // 3. Update local state explicitly to trigger immediate re-renders
            setUser(prev => {
                if (!prev) return null;
                return {
                    ...prev,
                    name: name || currentUser.displayName || '',
                    photoURL: photoURL || currentUser.photoURL || ''
                };
            });
            
            console.log('Profile updated in Firestore & Local State (Auth photo update skipped if too large)');
        } catch (err) {
            console.error('Failed to update user profile:', err);
            throw err;
        }
    }, []); // Removed [user] dependency to avoid stale closure or recreation loops

    return (
        <AuthContext.Provider value={{
            user, loading, login, register, loginWithGoogle,
            logout, resetPassword, saveQuizHistory, getQuizHistory,
            upgradeToPremium, toggleFavorite, updateUserInfo
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
