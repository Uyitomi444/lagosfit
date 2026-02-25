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

    // Load history: from Firestore for logged-in users, localStorage for guests
    useEffect(() => {
        const loadHistory = async () => {
            if (user) {
                setHistoryLoading(true);
                try {
                    const cloudHistory = await getQuizHistory();
                    // Sort by date, newest first
                    cloudHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    setHistory(cloudHistory);
                } catch (err) {
                    console.error('Failed to load cloud history:', err);
                }
                setHistoryLoading(false);
            } else {
                // Guest: use localStorage
                const savedHistory = localStorage.getItem('lagos_quiz_history');
                if (savedHistory) {
                    try { setHistory(JSON.parse(savedHistory)); } catch (e) { console.error('Failed to parse history', e); }
                } else {
                    setHistory([]);
                }
            }
        };
        loadHistory();
    }, [user, getQuizHistory]);

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
            const current = prev[key];
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
    }, []);

    const saveResult = useCallback((topMatch: Area) => {
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
    }, [answers, history, user, saveQuizHistory]);

    const clearHistory = useCallback(() => {
        setHistory([]);
        localStorage.removeItem('lagos_quiz_history');
        // Note: Cloud history clearing would need a Firestore update
        // For now, it only clears the local view
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
