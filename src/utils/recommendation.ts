import type { Area, QuizAnswers } from '../types';
import { AREAS } from '../data/quiz_data';

// Helper: check if a user answer (single or array) matches an area attribute array
function matchesAny<T>(userAnswer: T | T[] | undefined, areaValues: T[]): boolean {
    if (userAnswer === undefined) return false;
    const arr = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    return arr.some((val) => areaValues.includes(val));
}

export const getRecommendations = (answers: QuizAnswers): { top: Area; others: Area[] } => {
    const scoredAreas = AREAS.map((area) => {
        let score = 0;

        // Budget Match (Priority weight: 10)
        if (answers.customBudget !== undefined) {
            if (answers.customBudget >= area.minPrice && answers.customBudget <= area.maxPrice) {
                score += 10;
            } else if (answers.customBudget >= area.minPrice * 0.8 && answers.customBudget <= area.maxPrice * 1.2) {
                score += 5;
            }
        } else if (matchesAny(answers.rent, area.attributes.rent)) {
            // Multi-select: bonus for each matching rent tier
            const userRents = Array.isArray(answers.rent) ? answers.rent : answers.rent ? [answers.rent] : [];
            const matchCount = userRents.filter((r) => area.attributes.rent.includes(r)).length;
            score += 3 + matchCount; // base 3 + 1 bonus per matched tier
        }

        // Work Match (Weight: 4)
        if (matchesAny(answers.work, area.attributes.work)) score += 4;

        // Noise Match (Weight: 2)
        if (matchesAny(answers.noise, area.attributes.noise)) score += 2;

        // Transport Match (Weight: 2 — multi-select bonus)
        {
            const userTransport = Array.isArray(answers.transport) ? answers.transport : answers.transport ? [answers.transport] : [];
            const matchCount = userTransport.filter((t) => area.attributes.transport.includes(t)).length;
            if (matchCount > 0) score += 1 + matchCount;
        }

        // Lifestyle Match (Weight: 2)
        if (matchesAny(answers.lifestyle, area.attributes.lifestyle)) score += 2;

        // Electricity Match (Weight: 2)
        if (matchesAny(answers.electricity, area.attributes.electricity)) score += 2;

        return { ...area, matchScore: score };
    });

    // Sort by score desc, then alphabetically for ties
    scoredAreas.sort((a, b) => {
        if ((b.matchScore || 0) !== (a.matchScore || 0)) {
            return (b.matchScore || 0) - (a.matchScore || 0);
        }
        return a.name.localeCompare(b.name);
    });

    return {
        top: scoredAreas[0],
        others: scoredAreas.slice(1, 4),
    };
};
