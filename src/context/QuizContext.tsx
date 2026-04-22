import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { QuizAnswers, QuizHistoryItem, Area, SubscriptionTier } from '../types';
import { useAuth } from './AuthContext';

interface QuizContextType {
    answers: QuizAnswers;
    step: number;
    history: QuizHistoryItem[];
    tier: SubscriptionTier;
    setAnswer: (key: keyof QuizAnswers, value: string | number) => void;
    toggleAnswer: (key: keyof QuizAnswers, value: string) => void;
    isAnswerSelected: (key: keyof QuizAnswers, value: string) => boolean;
    setTier: (tier: SubscriptionTier) => void;
    nextStep: () => void;
    prevStep: () => void;
    resetQuiz: () => void;
    saveResult: (topMatch: Area) => void;
    clearHistory: () => void;
    historyLoading: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [answers, setAnswers] = useState<QuizAnswers>({});
    const [step, setStep] = useState(0);
    const [history, setHistory] = useState<QuizHistoryItem[]>([]);
    const [tier, setTierState] = useState<SubscriptionTier>('free');
    const [historyLoading, setHistoryLoading] = useState(false);

    const { user, saveQuizHistory, getQuizHistory } = useAuth();

    // Load state from session/local storage on mount
    useEffect(() => {
        const savedAnswers = localStorage.getItem('lagos_quiz_current_answers');
        if (savedAnswers) {
            try { setAnswers(JSON.parse(savedAnswers)); } catch (e) { console.error('Failed to parse saved answers', e); }
        }
        const savedStep = localStorage.getItem('lagos_quiz_current_step');
        if (savedStep) setStep(parseInt(savedStep, 10));
    }, []);

    // Persist current quiz progress
    useEffect(() => {
        if (Object.keys(answers).length > 0) {
            localStorage.setItem('lagos_quiz_current_answers', JSON.stringify(answers));
        } else {
            localStorage.removeItem('lagos_quiz_current_answers');
        }
    }, [answers]);

    useEffect(() => {
        if (step > 0) {
            localStorage.setItem('lagos_quiz_current_step', step.toString());
        }
    }, [step]);

    // Load and Merge history: from Firestore for logged-in users
    useEffect(() => {
        const loadAndMergeHistory = async () => {
            if (user) {
                setHistoryLoading(true);
                try {
                    // 1. Get cloud history
                    const cloudHistory = await getQuizHistory();
                    
                    // 2. Check for local guest history to merge
                    const guestHistoryStr = localStorage.getItem('lagos_quiz_history');
                    let finalHistory = [...cloudHistory];
                    
                    if (guestHistoryStr) {
                        try {
                            const guestHistory: QuizHistoryItem[] = JSON.parse(guestHistoryStr);
                            if (guestHistory.length > 0) {
                                console.log('Merging guest history into cloud storage...');
                                // Merge guest items into cloud history (avoiding potential duplicates by ID)
                                const cloudIds = new Set(cloudHistory.map(item => item.id));
                                const newItems = guestHistory.filter(item => !cloudIds.has(item.id));
                                
                                if (newItems.length > 0) {
                                    // Save new items to Firestore one by one
                                    for (const item of newItems) {
                                        await saveQuizHistory(item);
                                    }
                                    finalHistory = [...newItems, ...cloudHistory];
                                }
                                // Clear guest history once merged
                                localStorage.removeItem('lagos_quiz_history');
                            }
                        } catch (e) {
                            console.error('Failed to merge guest history', e);
                        }
                    }

                    // Sort by date, newest first
                    finalHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    setHistory(finalHistory.slice(0, 20));
                } catch (err) {
                    console.error('Failed to load/merge history:', err);
                }
                setHistoryLoading(false);
            } else {
                // Guest: use localStorage only
                const savedHistory = localStorage.getItem('lagos_quiz_history');
                if (savedHistory) {
                    try { setHistory(JSON.parse(savedHistory)); } catch (e) { console.error('Failed to parse history', e); }
                } else {
                    setHistory([]);
                }
            }
        };
        loadAndMergeHistory();
    }, [user, getQuizHistory, saveQuizHistory]);

    // Load subscription tier
    useEffect(() => {
        const savedTier = localStorage.getItem('lagos_subscription_tier');
        if (savedTier) setTierState(savedTier as SubscriptionTier);
    }, []);

    // For single-value questions
    const setAnswer = useCallback((key: keyof QuizAnswers, value: string | number) => {
        setAnswers((prev) => ({ ...prev, [key]: value }));
    }, []);

    // Toggle a value in a multi-select array field
    const toggleAnswer = useCallback((key: keyof QuizAnswers, value: string) => {
        setAnswers((prev) => {
            const current = (prev as Record<string, any>)[key];
            const arr: string[] = Array.isArray(current)
                ? [...current]
                : current !== undefined
                    ? [current as string]
                    : [];

            const idx = arr.indexOf(value);
            if (idx >= 0) {
                arr.splice(idx, 1);
            } else {
                arr.push(value);
            }
            return { ...prev, [key]: arr.length === 0 ? undefined : arr.length === 1 ? arr[0] : arr };
        });
    }, []);

    // Check if a specific value is selected
    const isAnswerSelected = useCallback((key: keyof QuizAnswers, value: string): boolean => {
        const current = (answers as Record<string, unknown>)[key];
        if (current === undefined) return false;
        if (Array.isArray(current)) return current.includes(value);
        return current === value;
    }, [answers]);

    const setTier = useCallback((newTier: SubscriptionTier) => {
        setTierState(newTier);
        localStorage.setItem('lagos_subscription_tier', newTier);
    }, []);

    const nextStep = useCallback(() => setStep((prev) => prev + 1), []);
    const prevStep = useCallback(() => setStep((prev) => Math.max(0, prev - 1)), []);

    const resetQuiz = useCallback(() => {
        setAnswers({});
        setStep(1);
        localStorage.removeItem('lagos_quiz_current_answers');
        localStorage.removeItem('lagos_quiz_current_step');
    }, []);

    const saveResult = useCallback((topMatch: Area) => {
        if (Object.keys(answers).length === 0) return; // Don't save empty results

        const newItem: QuizHistoryItem = {
            id: Math.random().toString(36).substr(2, 9),
            answers: { ...answers },
            topMatch,
            date: new Date().toISOString()
        };
        
        const updatedHistory = [newItem, ...history].slice(0, 20);
        setHistory(updatedHistory);

        if (user) {
            // Save to Firestore for logged-in users
            saveQuizHistory(newItem).catch(console.error);
        } else {
            // Save to localStorage for guests
            localStorage.setItem('lagos_quiz_history', JSON.stringify(updatedHistory));
        }

        // Clear current progress once successfully matched
        localStorage.removeItem('lagos_quiz_current_answers');
        localStorage.removeItem('lagos_quiz_current_step');
    }, [answers, history, user, saveQuizHistory]);

    const clearHistory = useCallback(() => {
        setHistory([]);
        localStorage.removeItem('lagos_quiz_history');
        // Note: Full cloud history clearing would require a specific Firestore delete all call
    }, []);

    return (
        <QuizContext.Provider value={{
            answers, step, history, tier, historyLoading,
            setAnswer, toggleAnswer, isAnswerSelected,
            setTier, nextStep, prevStep, resetQuiz, saveResult, clearHistory
        }}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) throw new Error('useQuiz must be used within a QuizProvider');
    return context;
};
