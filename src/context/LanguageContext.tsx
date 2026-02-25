import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'pidgin';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        'landing.title': 'Which Lagos Area Fits You?',
        'landing.subtitle': 'Find the Lagos area that matches your lifestyle, budget, and vibe.',
        'landing.cta': 'Find Your Match',
        'landing.time': 'Takes 30 seconds • Data-backed',
        'nav.home': 'Home',
        'nav.how': 'How it Works',
        'nav.explore': 'Explore Areas',
        'nav.about': 'About',
        'quiz.next': 'Next',
        'quiz.back': 'Back',
        'quiz.results': 'See Results',
        'result.top': 'Top Match',
        'result.score': 'Match Score',
        'result.explore': 'Explore Neighborhood',
        'result.others': 'Other strong candidates',
        'result.retake': 'Retake Quiz'
    },
    pidgin: {
        'landing.title': 'Which Lagos Area Fit You?',
        'landing.subtitle': 'Find the area wey align with your pocket and lifestyle.',
        'landing.cta': 'Find Your Match Now!',
        'landing.time': 'E no go pass 30 seconds',
        'nav.home': 'House',
        'nav.how': 'How E Dey Work',
        'nav.explore': 'See Areas',
        'nav.about': 'About Us',
        'quiz.next': 'Go Front',
        'quiz.back': 'Go Back',
        'quiz.results': 'Check Result',
        'result.top': 'Number 1 Choice',
        'result.score': 'Score',
        'result.explore': 'Check Dis Area',
        'result.others': 'Other Areas Wey Make Sense',
        'result.retake': 'Do Am Again'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
