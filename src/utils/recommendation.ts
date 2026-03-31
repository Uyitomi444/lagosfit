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

        // Budget Match (Priority weight: 8)
        if (answers.customBudget !== undefined) {
            if (answers.customBudget >= area.minPrice && answers.customBudget <= area.maxPrice) {
                score += 8;
            } else if (answers.customBudget >= area.minPrice * 0.8 && answers.customBudget <= area.maxPrice * 1.2) {
                score += 4;
            }
        } else if (matchesAny(answers.rent, area.attributes.rent)) {
            // Multi-select: bonus for each matching rent tier
            const userRents = Array.isArray(answers.rent) ? answers.rent : answers.rent ? [answers.rent] : [];
            const matchCount = userRents.filter((r) => area.attributes.rent.includes(r)).length;
            score += 2 + matchCount; // base 2 + 1 bonus per matched tier
        }

        // Geogrpahical Preference (Island vs Mainland) (Weight: 15)
        if (matchesAny(answers.work, area.attributes.work)) score += 15;

        // Specific Workplace Proximity (Weight: 5)
        if (answers.workLocation) {
            // Case 1: Area is the workplace itself (e.g. Work in VI, live in VI)
            if (area.name.toLowerCase().includes(answers.workLocation.toLowerCase())) {
                score += 5;
            }
            // Case 2: Commute time is under 40m for the relevant office hubs
            if (answers.workLocation === 'vi' && area.commuteTo.vi.includes('m') && parseInt(area.commuteTo.vi) < 40) {
                score += 5;
            }
            if (answers.workLocation === 'ikeja' && area.commuteTo.ikeja.includes('m') && parseInt(area.commuteTo.ikeja) < 30) {
                score += 5;
            }
        }

        // Noise Match (Weight: 2)
        if (matchesAny(answers.noise, area.attributes.noise)) score += 2;

        // Transport Match (Weight: 2 — multi-select bonus)
        {
            const userTransport = Array.isArray(answers.transport) ? answers.transport : answers.transport ? [answers.transport] : [];
            const matchCount = userTransport.filter((t) => area.attributes.transport.includes(t)).length;
            if (matchCount > 0) score += 1 + matchCount;
        }

        // Lifestyle Match (Weight: 2 + multi-select bonus)
        {
            const userLifestyle = Array.isArray(answers.lifestyle) ? answers.lifestyle : answers.lifestyle ? [answers.lifestyle] : [];
            const matchCount = userLifestyle.filter((l) => area.attributes.lifestyle.includes(l)).length;
            if (matchCount > 0) score += 1 + matchCount;
        }

        // Electricity Match (Weight: 2 + multi-select bonus)
        {
            const userElec = Array.isArray(answers.electricity) ? answers.electricity : answers.electricity ? [answers.electricity] : [];
            const matchCount = userElec.filter((e) => area.attributes.electricity.includes(e)).length;
            if (matchCount > 0) score += 1 + matchCount;
        }

        return { ...area, matchScore: score };
    });

    // Sort by score desc, then alphabetically for ties
    scoredAreas.sort((a, b) => {
        if ((b.matchScore || 0) !== (a.matchScore || 0)) {
            return (b.matchScore || 0) - (a.matchScore || 0);
        }
        // If tied, sort by Security Rating (Premium feature)
        return (b.securityRating || 0) - (a.securityRating || 0);
    });

    return {
        top: scoredAreas[0],
        others: scoredAreas.slice(1, 4),
    };
};
