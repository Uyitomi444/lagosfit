import { db } from '../config/firebase';
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { AGENTS, AGENCIES, OFFICE_AGENTS, TIKTOK_HANDLES } from '../data/agents_data';

export const migrateAgentsToFirestore = async () => {
    try {
        const agentsColl = collection(db, 'agents');
        const snap = await getDocs(agentsColl);
        
        if (!snap.empty) {
            console.log('Agents already migrated.');
            return;
        }

        console.log('Migrating agents to Firestore...');
        const batch = writeBatch(db);

        // Migrate Individual Agents
        AGENTS.forEach(agent => {
            const ref = doc(collection(db, 'agents'));
            batch.set(ref, { ...agent, category: 'individual', createdAt: new Date().toISOString() });
        });

        // Migrate Agencies
        AGENCIES.forEach(agency => {
            const ref = doc(collection(db, 'agents'));
            batch.set(ref, { ...agency, category: 'agency', createdAt: new Date().toISOString() });
        });

        // Migrate Office Agents
        OFFICE_AGENTS.forEach(office => {
            const ref = doc(collection(db, 'agents'));
            batch.set(ref, { ...office, category: 'office', type: 'office', createdAt: new Date().toISOString() });
        });

        // Migrate TikTok Handles
        TIKTOK_HANDLES.forEach(tiktok => {
            const ref = doc(collection(db, 'agents'));
            batch.set(ref, { ...tiktok, category: 'social', type: 'social', createdAt: new Date().toISOString() });
        });

        await batch.commit();
        console.log('Migration successful!');
    } catch (err) {
        console.error('Migration failed:', err);
    }
};
