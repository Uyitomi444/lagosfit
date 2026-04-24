export type RentRange = 'entry' | 'budget' | 'standard' | 'mid' | 'upper_mid' | 'premium' | 'luxury';
export type WorkDistance = 'central' | 'commute' | 'island';
export type NoiseTolerance = 'quiet' | 'moderate' | 'noisy';
export type TransportPref = 'public' | 'ride' | 'walk' | 'private' | 'keke';
export type LifestylePref = 'nightlife' | 'family' | 'creative' | 'fitness';
export type ElectricityPref = 'stable' | 'manageable' | 'alternative';

// Multi-select answers: each field can hold one OR an array of values
export interface QuizAnswers {
    rent?: RentRange | RentRange[];
    customBudget?: number;
    work?: WorkDistance | WorkDistance[];
    noise?: NoiseTolerance | NoiseTolerance[];
    transport?: TransportPref | TransportPref[];
    lifestyle?: LifestylePref | LifestylePref[];
    electricity?: ElectricityPref | ElectricityPref[];
    workLocation?: string;
    priority?: 'security' | 'commute' | 'electricity' | 'price';
    other_area?: string;
    date?: string; // For history
}

export type Language = 'en' | 'pidgin' | 'yo' | 'ig' | 'ha';

export interface LocalizedString {
    en: string;
    pidgin: string;
    yo: string;
    ig: string;
    ha: string;
}

export type SubscriptionTier = 'free' | 'standard' | 'premium';

export interface SubLocalityDetail {
    placesToVisit?: { name: string; url?: string }[];
    whatToEat?: { name: string; url?: string }[];
    sports?: {
        name: string;
        type: 'Gym' | 'Football' | '5-aside' | 'Basketball' | 'Tennis' | 'Other';
        url?: string;
    }[];
}

export interface Area {
    id: string;
    name: string;
    description: LocalizedString;
    priceRange: LocalizedString;
    minPrice: number;
    maxPrice: number;
    image?: string;
    commuteTo: {
        vi: string;
        ikeja: string;
    };
    hotspots: {
        name: string;
        category: 'food' | 'nightlife' | 'activity' | 'hotel';
        url?: string;
    }[];
    attributes: {
        rent: RentRange[];
        work: WorkDistance[];
        noise: NoiseTolerance[];
        transport: TransportPref[];
        lifestyle: LifestylePref[];
        electricity: ElectricityPref[];
    };
    // Inner localities / sub-neighborhoods
    innerLocalities?: string[];
    subLocalityInsights?: Record<string, LocalizedString>;
    subLocalityDetails?: Record<string, SubLocalityDetail>;

    // Truth Data (Premium)
    floodRisk?: 'low' | 'moderate' | 'high';
    powerAvgHours?: number;
    internetFiber?: boolean;
    securityRating?: number;
    genCostEstimate?: string; // Monthly fuel/diesel estimate

    // Real-world sentiment (Social Media/Blogs)
    socialBuzz?: {
        trending: string;
        complaints: string[];
        compliments: string[];
    };

    funFact?: {
        en: string;
        pidgin: string;
        yo: string;
        ig: string;
        ha: string;
    };
    matchScore?: number;
    aiSummary?: string; // Generated Buddy's Take
    coords?: {
        lat: number;
        lng: number;
    };
}

export interface LagosGuideItem {
    name: string;
    url?: string;
    description?: string;
    isStarred?: boolean;
}

export interface QuestionOption {
    id: string;
    label: LocalizedString;
    value: string;
}

export interface Question {
    id: keyof QuizAnswers;
    text: LocalizedString;
    options: QuestionOption[];
    multiSelect?: boolean;
    placeholder?: LocalizedString; 
}

export interface QuizHistoryItem {
    id: string;
    answers: QuizAnswers;
    topMatch: Area;
    date: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    isPremium?: boolean; // Added for mock
    isAdmin?: boolean; // Added for mock
    history: QuizHistoryItem[];
}
