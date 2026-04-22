import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult
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
    toggleFavorite: (areaId: string) => Promise<void>; 
    updateUserInfo: (name: string, photoURL?: string) => Promise<void>;
    refreshUserStatus: () => Promise<void>; // Added
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

// Helper: ensure a user doc exists in Firestore with correct initial data
const ensureUserDoc = async (firebaseUser: FirebaseUser, additionalData: { name?: string; photoURL?: string } = {}) => {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const snap = await getDoc(userRef);
    
    // Always update if missing, or create if new
    if (!snap.exists()) {
        await setDoc(userRef, {
            email: firebaseUser.email,
            name: additionalData.name || firebaseUser.displayName || 'Anonymous User',
            photoURL: additionalData.photoURL || firebaseUser.photoURL || '',
            createdAt: serverTimestamp(),
            quizHistory: [],
            isAdmin: false,
            isPremium: false,
            favorites: []
        });
    } else if (additionalData.name || additionalData.photoURL) {
        // If doc exists but we have new data (like after a register/profile update)
        const updateObj: any = {};
        if (additionalData.name) updateObj.name = additionalData.name;
        if (additionalData.photoURL) updateObj.photoURL = additionalData.photoURL;
        await updateDoc(userRef, updateObj);
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState(true);

    // Configuration Health Check (Masked for security)
    useEffect(() => {
        const checkConfig = () => {
            const config = auth.app.options;
            const health = {
                apiKey: config.apiKey && config.apiKey.length > 10 ? 'VALID' : 'MISSING/TOO_SHORT',
                authDomain: config.authDomain && !config.authDomain.includes('%') ? 'VALID' : 'CORRUPTED',
                projectId: config.projectId && !config.projectId.includes('%') ? 'VALID' : 'CORRUPTED',
            };
            console.log('Firebase Config Health Check:', health);
            if (Object.values(health).includes('CORRUPTED') || Object.values(health).includes('MISSING/TOO_SHORT')) {
                console.warn('CRITICAL: Firebase configuration is unhealthy. Admin bypass is still active.');
            }
        };
        checkConfig();
    }, []);

    // Handle Redirect Result on mount (catch errors from any previous signInWithRedirect)
    useEffect(() => {
        const handleRedirect = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result?.user) {
                    await ensureUserDoc(result.user);
                    console.log('Redirect Sign-In Success');
                }
            } catch (err: any) {
                console.error('Redirect Sign-In Error:', err);
                // Temporary debug alert for the user to see the exact error code
                if (err.code) {
                    alert(`Firebase Error: ${err.code}\n${err.message}\nHostname: ${window.location.hostname}`);
                }
            } finally {
                setLoading(false);
            }
        };
        handleRedirect();
    }, []);

    // Listen to Firebase auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                console.log('Firebase user detected:', firebaseUser.email);
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
                const updatedUser = mapUser(firebaseUser, isPremium, isAdmin, favorites, firestoreData);
                setUser(updatedUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Added: Manual refresh of user status from Firestore
    const refreshUserStatus = useCallback(async () => {
        const firebaseUser = auth.currentUser;
        if (!firebaseUser) return;

        setLoading(true);
        try {
            const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
            if (snap.exists()) {
                const data = snap.data();
                const isPremium = data.isPremium === true;
                const isAdmin = data.isAdmin === true || (firebaseUser.email?.toLowerCase() === 'admin@lagosfit.com');
                const favorites = data.favorites || [];
                const firestoreData = { name: data.name, photoURL: data.photoURL };
                
                setUser(mapUser(firebaseUser, isPremium, isAdmin, favorites, firestoreData));
                console.log('User status manually refreshed from Firestore');
            }
        } catch (err) {
            console.error('Manual refresh failed:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Email + Password Registration
    const register = async (name: string, email: string, password: string) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
        // Passing name explicitly to ensure it's saved to Firestore immediately
        await ensureUserDoc(cred.user, { name });
        setUser(mapUser(cred.user, false, false, [], { name }));
    };

    // Email + Password Login
    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    // Google Sign-In
    const loginWithGoogle = async () => {
        try {
            console.log('Attempting Google Sign-In (Popup mode)...');
            // We try popup first. If you are in mobile emulation, 
            // the browser might handle a popup better than a full-page disallowed redirect.
            const result = await signInWithPopup(auth, googleProvider);
            await ensureUserDoc(result.user);
            console.log('Google Sign-In Successful');
        } catch (err: any) {
            console.error('Google Sign-In Error:', {
                code: err.code,
                message: err.message,
                domain: window.location.hostname
            });

            // If the popup is blocked, switch to redirect SILENTLY for a better UX
            if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
                console.log('Popup restricted. Trying Redirect flow...');
                await signInWithRedirect(auth, googleProvider);
            } else {
                // Only alert for actual configuration or network errors
                alert(`Login Error: ${err.code}\n${err.message}`);
                throw err;
            }
        }
    };

    // Logout
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error('Error during signOut:', err);
        }
        setUser(null);
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
            await setDoc(userRef, {
                quizHistory: arrayUnion({
                    ...item,
                    savedAt: new Date().toISOString()
                })
            }, { merge: true });
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

    const upgradeToPremium = useCallback(async (paymentReference: string) => {
        const currentUser = auth.currentUser;
        
        // Developer/Admin bypass logic for testing on live site
        const isAdmin = currentUser?.email?.toLowerCase() === 'admin@lagosfit.com';
        
        if (!currentUser && !isAdmin) throw new Error('Must be logged in to upgrade');
        if (!currentUser && isAdmin) {
             console.warn('Simulating upgrade for dev-mode admin...');
             setUser(prev => prev ? { ...prev, isPremium: true } : null);
             return;
        }

        try {
            const userRef = doc(db, 'users', currentUser!.uid);
            
            console.log(`Finalizing Pro Upgrade for ${currentUser?.email}...`);
            
            await setDoc(userRef, {
                isPremium: true,
                premiumUpgradedAt: serverTimestamp(),
                paymentReference: paymentReference || 'admin-bypass'
            }, { merge: true });

            // Update local user state immediately
            setUser(prev => prev ? { ...prev, isPremium: true } : null);
            console.log('Pro status updated successfully!');
        } catch (err: any) {
            console.error('PRO UPGRADE FAILED:', err);
            // If it's a permission error, alert the user or log it specifically
            if (err.code === 'permission-denied') {
                throw new Error('Database permission denied. Please ensure you have updated your Firebase Security Rules in the console (Rules must allow writing to /users/{uid}).');
            }
            throw err;
        }
    }, []);

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

            await setDoc(userRef, {
                favorites: newFavorites
            }, { merge: true });

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
            await setDoc(userRef, {
                name: name || currentUser.displayName || '',
                photoURL: photoURL || currentUser.photoURL || ''
            }, { merge: true });

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
            upgradeToPremium, toggleFavorite, updateUserInfo, refreshUserStatus
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
