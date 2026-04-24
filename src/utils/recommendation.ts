import type { Area, QuizAnswers } from '../types';
import { AREAS } from '../data/quiz_data';

// Budget tiers mapping for strict filtering
const BUDGET_MAP: Record<string, { min: number, max: number }> = {
    'entry': { min: 200000, max: 500000 },
    'budget': { min: 500000, max: 1000000 },
    'standard': { min: 1000000, max: 2000000 },
    'mid': { min: 2000000, max: 5000000 },
    'upper_mid': { min: 5000000, max: 7000000 },
    'premium': { min: 7000000, max: 10000000 },
    'luxury': { min: 10000000, max: 999999999 }
};

// Helper: check if a user answer (single or array) matches an area attribute array
function matchesAny<T>(userAnswer: T | T[] | undefined, areaValues: T[]): boolean {
    if (userAnswer === undefined) return false;
    const arr = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    return arr.some((val) => areaValues.includes(val));
}

export const getRecommendations = (answers: QuizAnswers): { top: Area; others: Area[]; noMatch?: boolean } => {
    // 1. Calculate effective budget
    let userMin = 0;
    let userMax = 999999999;

    if (answers.customBudget) {
        userMin = answers.customBudget * 0.7; // Allowance for slightly lower
        userMax = answers.customBudget * 1.3; // Allow up to 30% above (very strict)
    } else if (answers.rent) {
        const rents = Array.isArray(answers.rent) ? answers.rent : [answers.rent];
        userMin = Math.min(...rents.map(r => BUDGET_MAP[r]?.min || 0));
        userMax = Math.max(...rents.map(r => BUDGET_MAP[r]?.max || 999999999)) * 1.25; // Small buffer for tiers
    }

    // 2. Perform HARD FILTERING - "Better no result than wrong results"
    const validAreas = AREAS.filter(area => {
        // Area must be affordable. Its minimum price shouldn't be significantly higher than user's max.
        // We allow areas where the area's MIN is <= user's MAX.
        return area.minPrice <= userMax;
    });

    // If NO areas match the budget, we have two options:
    // a) Return nothing (strict)
    // b) Return the absolute closest but mark as 'noMatch'
    if (validAreas.length === 0) {
        // Return top matches from the full list but with a warning flag
        const sortedFull = [...AREAS].sort((a,b) => a.minPrice - b.minPrice);
        return {
            top: sortedFull[0],
            others: sortedFull.slice(1, 4),
            noMatch: true
        };
    }

    const scoredAreas = validAreas.map((area) => {
        let score = 0;

        // --- Budget Weighting (Critical: 50 points) ---
        if (answers.customBudget) {
            if (answers.customBudget >= area.minPrice && answers.customBudget <= area.maxPrice) {
                score += 50; 
            } else if (answers.customBudget >= area.minPrice * 0.8) {
                score += 25;
            }
        } else if (matchesAny(answers.rent, area.attributes.rent)) {
            score += 50;
        }

        // --- Specific Workplace Proximity (High: 30 point) ---
        if (answers.workLocation) {
            const loc = answers.workLocation.toLowerCase();
            if (area.name.toLowerCase().includes(loc)) {
                score += 30;
            }
            // Commute times
            if (loc === 'vi' && area.commuteTo.vi.includes('m') && parseInt(area.commuteTo.vi) < 40) score += 20;
            if (loc === 'ikeja' && area.commuteTo.ikeja.includes('m') && parseInt(area.commuteTo.ikeja) < 30) score += 20;
        }

        // --- Island/Mainland Preference (Weight: 10) ---
        if (matchesAny(answers.work, area.attributes.work)) score += 10;

        // --- Lifestyle & Vibe (Weight: 5 per match) ---
        if (matchesAny(answers.lifestyle, area.attributes.lifestyle)) score += 5;
        if (matchesAny(answers.noise, area.attributes.noise)) score += 5;
        if (matchesAny(answers.electricity, area.attributes.electricity)) score += 5;

        // --- "Other Area" specify boost ---
        if (answers.other_area && area.name.toLowerCase().includes(answers.other_area.toLowerCase())) {
            score += 100; // If they eye it and it's affordable, it's the TOP choice
        }

        return { ...area, matchScore: score };
    });

    // Sort by score desc, then security, then alphabetically
    scoredAreas.sort((a, b) => {
        if ((b.matchScore || 0) !== (a.matchScore || 0)) {
            return (b.matchScore || 0) - (a.matchScore || 0);
        }
        return (b.securityRating || 0) - (a.securityRating || 0);
    });

    return {
        top: scoredAreas[0],
        others: scoredAreas.slice(1, 4),
    };
};
