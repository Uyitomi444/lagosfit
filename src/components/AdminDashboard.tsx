import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, TrendingUp, ShieldCheck, Briefcase, 
    Search, 
    BarChart3, 
    LogOut, LayoutDashboard, 
    Mail, 
    Crown, MapPin, Smartphone, Plus, Trash2, Edit2, CheckCircle, Globe
} from 'lucide-react';
import { db } from '../config/firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { migrateAgentsToFirestore } from '../utils/admin_setup';

import AdminReviewsTab from './AdminReviewsTab';

type AdminTab = 'overview' | 'users' | 'agents' | 'reviews' | 'analytics';

// --- Sub-components ---

const SidebarItem = ({ active, icon, label, onClick }: any) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
            padding: '12px 16px', borderRadius: '12px', border: 'none',
            background: active ? 'var(--secondary-bg)' : 'transparent',
            color: active ? 'var(--text-main)' : 'var(--text-muted)',
            fontWeight: active ? 600 : 400, cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left'
        }}
    >
        <span style={{ color: active ? 'var(--primary-color)' : 'inherit', display: 'flex' }}>{icon}</span>
        <span>{label}</span>
        {active && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary-color)', marginLeft: 'auto' }} />}
    </button>
);

const StatCard = ({ label, value, icon }: any) => (
    <div className="card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid var(--border-color)', background: 'var(--card-bg)' }}>
        <div style={{ 
            color: 'var(--primary-color)', 
            width: '40px', height: '40px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0.8
        }}>
            {icon}
        </div>
        <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>{label}</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-main)' }}>{value}</div>
        </div>
    </div>
);

const OverviewTab = ({ stats }: any) => {
    const PRO_PRICE = 4500;
    const mrr = stats.premiumUsers * PRO_PRICE;
    const conversionRate = stats.totalUsers > 0 ? ((stats.premiumUsers / stats.totalUsers) * 100).toFixed(1) : 0;

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                <StatCard label="Total Users" value={stats.totalUsers} icon={<Users size={20} strokeWidth={1.5} />} />
                <StatCard label="Pro Subscribers" value={stats.premiumUsers} icon={<Crown size={20} strokeWidth={1.5} />} />
                <StatCard label="Monthly Revenue" value={`₦${mrr.toLocaleString()}`} icon={<TrendingUp size={20} strokeWidth={1.5} />} />
                <StatCard label="Total Agents" value={stats.totalAgents} icon={<Briefcase size={20} strokeWidth={1.5} />} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="card" style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '24px' }}>Conversion Performance</h3>
                    <div style={{ height: '24px', background: 'var(--secondary-bg)', borderRadius: '12px', overflow: 'hidden', display: 'flex', marginBottom: '16px' }}>
                        <div style={{ width: `${conversionRate}%`, background: 'var(--primary-color)' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <span>Pro Users: {stats.premiumUsers}</span>
                        <span>Free Users: {stats.totalUsers - stats.premiumUsers}</span>
                    </div>
                </div>
                <div className="card" style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '24px' }}>Recent Activity</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div style={{ padding: '8px', background: 'rgba(var(--primary-rgb), 0.05)', color: 'var(--success-color)', borderRadius: '50%' }}>
                                <CheckCircle size={16} strokeWidth={1.5} />
                            </div>
                            <span style={{ fontSize: '0.9rem' }}>{stats.recentQuizCount} total quizzes taken across all users.</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const UsersTab = ({ users, togglePremium }: any) => {
    const [search, setSearch] = useState('');
    const filteredUsers = users.filter((u: any) => 
        u.email?.toLowerCase().includes(search.toLowerCase()) || 
        u.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                        type="text" placeholder="Search users by name or email..." 
                        value={search} onChange={(e) => setSearch(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--secondary-bg)' }}
                    />
                </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'var(--secondary-bg)', color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'left' }}>
                    <tr>
                        <th style={{ padding: '16px 24px' }}>USER</th>
                        <th style={{ padding: '16px 24px' }}>STATUS</th>
                        <th style={{ padding: '16px 24px' }}>DATE JOINED</th>
                        <th style={{ padding: '16px 24px' }}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((u: any) => (
                        <tr key={u.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <td style={{ padding: '16px 24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                                        {u.name?.[0] || 'U'}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>{u.name || 'Anonymous'}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{u.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td style={{ padding: '16px 24px' }}>
                                <span style={{ 
                                    padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700,
                                    background: u.isPremium ? 'rgba(var(--primary-rgb), 0.1)' : 'var(--secondary-bg)',
                                    color: u.isPremium ? 'var(--primary-color)' : 'var(--text-muted)'
                                }}>
                                    {u.isPremium ? 'PRO' : 'FREE'}
                                </span>
                            </td>
                            <td style={{ padding: '16px 24px', fontSize: '0.85rem' }}>
                                {u.createdAt ? new Date(u.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                            </td>
                            <td style={{ padding: '16px 24px' }}>
                                <button 
                                    onClick={() => togglePremium(u.id, u.isPremium)}
                                    style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'white', fontSize: '0.8rem', cursor: 'pointer' }}
                                >
                                    {u.isPremium ? 'Downgrade' : 'Upgrade to Pro'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

const AnalyticsTab = ({ users }: any) => {
    // Data Aggregation for Analytics
    const quizResults = users.flatMap((u: any) => u.quizHistory || []);
    
    // 1. Popular Neighborhoods
    const neighborhoodCounts: any = {};
    quizResults.forEach((res: any) => {
        if (res.recommendation?.name) {
            neighborhoodCounts[res.recommendation.name] = (neighborhoodCounts[res.recommendation.name] || 0) + 1;
        }
    });
    const topNeighborhoods = Object.entries(neighborhoodCounts)
        .sort(([, a]: any, [, b]: any) => b - a)
        .slice(0, 5);

    // 2. Budget Distribution
    const budgetRanges = {
        'Low (<500k)': quizResults.filter((r: any) => (r.answers?.[2] === '0' || r.answers?.[2] === '< 500k')).length,
        'Medium (500k-2M)': quizResults.filter((r: any) => (r.answers?.[2] === '1' || r.answers?.[2] === '500k - 2M')).length,
        'High (2M-5M)': quizResults.filter((r: any) => (r.answers?.[2] === '2' || r.answers?.[2] === '2M - 5M')).length,
        'Premium (>5M)': quizResults.filter((r: any) => (r.answers?.[2] === '3' || r.answers?.[2] === '> 5M')).length,
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '32px' }}>
                {/* Top Recommendations */}
                <div className="card" style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <MapPin size={24} color="var(--primary-color)" />
                        <h3 style={{ margin: 0 }}>Top Recommended Neighborhoods</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {topNeighborhoods.length > 0 ? topNeighborhoods.map(([name, count]: any, i) => (
                            <div key={name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                                    <span style={{ fontWeight: 600 }}>{i + 1}. {name}</span>
                                    <span style={{ color: 'var(--text-muted)' }}>{count} hits</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--secondary-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div 
                                        initial={{ width: 0 }} animate={{ width: `${(count / quizResults.length) * 100}%` }}
                                        style={{ height: '100%', background: 'var(--primary-color)' }} 
                                    />
                                </div>
                            </div>
                        )) : (
                            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>No quiz data yet.</div>
                        )}
                    </div>
                </div>

                {/* Budget Distribution */}
                <div className="card" style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <TrendingUp size={24} color="var(--accent-color)" strokeWidth={1.5} />
                        <h3 style={{ margin: 0 }}>User Budget Distribution</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {Object.entries(budgetRanges).map(([label, count]: any) => (
                            <div key={label}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                                    <span style={{ fontWeight: 600 }}>{label}</span>
                                    <span style={{ color: 'var(--text-muted)' }}>{count} users</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--secondary-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div 
                                        initial={{ width: 0 }} animate={{ width: `${quizResults.length > 0 ? (count / quizResults.length) * 100 : 0}%` }}
                                        style={{ height: '100%', background: 'var(--accent-color)' }} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Financial Projections */}
                <div className="card" style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <TrendingUp size={24} color="var(--success-color)" strokeWidth={1.5} />
                        <h3 style={{ margin: 0 }}>Financial Breakdown</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--secondary-bg)', borderRadius: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Gross MRR</span>
                            <span style={{ fontWeight: 700, color: 'var(--success-color)' }}>₦{(users.filter((u: any) => u.isPremium).length * 4500).toLocaleString()}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--secondary-bg)', borderRadius: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Est. Net (after 2% fees)</span>
                            <span style={{ fontWeight: 700 }}>₦{(users.filter((u: any) => u.isPremium).length * 4500 * 0.98).toLocaleString()}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Projected ARR</span>
                            <span style={{ fontWeight: 800, color: 'var(--primary-color)' }}>₦{(users.filter((u: any) => u.isPremium).length * 4500 * 12).toLocaleString()}</span>
                        </div>
                        
                        <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--secondary-bg)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                            <strong>Growth Insight:</strong> If 5% of your total users ({users.length}) subscribe, your MRR would reach <strong>₦{(users.length * 0.05 * 4500).toLocaleString()}</strong>.
                        </div>
                    </div>
                </div>

                {/* Platform Summary Tiles */}
                <div className="card" style={{ padding: '32px', gridColumn: 'span 2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <ShieldCheck size={24} color="var(--success-color)" strokeWidth={1.5} />
                        <h3 style={{ margin: 0 }}>Platform & Revenue Summary</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                        <div style={{ padding: '20px', background: 'var(--secondary-bg)', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success-color)', marginBottom: '4px' }}>
                                ₦{(users.filter((u: any) => u.isPremium).length * 4500).toLocaleString()}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Est. Monthly Revenue</div>
                        </div>
                        <div style={{ padding: '20px', background: 'var(--secondary-bg)', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '4px' }}>
                                {users.filter((u: any) => u.email).length}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified Emails</div>
                        </div>
                        <div style={{ padding: '20px', background: 'var(--secondary-bg)', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '4px' }}>
                                {quizResults.length}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>User Insights</div>
                        </div>
                        <div style={{ padding: '20px', background: 'var(--secondary-bg)', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success-color)', marginBottom: '4px' }}>
                                100%
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Server Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const AgentsTab = ({ agents, deleteAgent, onMigrate, actionLoading, onEdit, onAdd }: any) => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const AGENTS_PER_PAGE = 9;

    const filteredAgents = agents.filter((a: any) => 
        (a.name || a.handle)?.toLowerCase().includes(search.toLowerCase()) || 
        a.category?.toLowerCase().includes(search.toLowerCase())
    );

    // Reset to page 1 on search
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    const totalPages = Math.ceil(filteredAgents.length / AGENTS_PER_PAGE);
    const startIndex = (currentPage - 1) * AGENTS_PER_PAGE;
    const paginatedAgents = filteredAgents.slice(startIndex, startIndex + AGENTS_PER_PAGE);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input 
                        type="text" placeholder="Search agents..." 
                        value={search} onChange={(e) => setSearch(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                        onClick={onMigrate} 
                        disabled={actionLoading}
                        className="btn btn-outline" 
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)' }}
                    >
                        <TrendingUp size={18} /> {actionLoading ? 'Working...' : 'Refetch/Migrate'}
                    </button>
                    <button onClick={onAdd} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Plus size={18} /> Add New Agent
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                {paginatedAgents.map((a: any) => (
                    <div key={a.id} className="card" style={{ padding: '20px', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <span style={{ 
                                fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', 
                                color: 'var(--primary-color)', background: 'rgba(var(--primary-rgb), 0.1)', padding: '2px 8px', borderRadius: '4px' 
                            }}>
                                {a.category}
                            </span>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Edit2 size={16} strokeWidth={1.5} className="icon-btn" onClick={() => onEdit(a)} style={{ cursor: 'pointer' }} />
                                <Trash2 size={16} strokeWidth={1.5} className="icon-btn" onClick={() => deleteAgent(a.id)} style={{ cursor: 'pointer', color: 'var(--error-color)' }} />
                            </div>
                        </div>
                        <h4 style={{ marginBottom: '8px' }}>{a.name || a.handle}</h4>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {a.phone && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Smartphone size={14} strokeWidth={1.5} /> {a.phone}</div>}
                            {a.email && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} strokeWidth={1.5} /> {a.email}</div>}
                            {a.website && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={14} strokeWidth={1.5} /> {a.website}</div>}
                            {a.location && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} strokeWidth={1.5} /> {a.location}</div>}
                            {a.description && <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>{a.description}</p>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination UI */}
            {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px', padding: '20px 0' }}>
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="btn btn-outline"
                        style={{ padding: '8px 16px', fontSize: '0.85rem', opacity: currentPage === 1 ? 0.5 : 1 }}
                    >
                        Previous
                    </button>

                    <div style={{ display: 'flex', gap: '6px' }}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                style={{
                                    width: '36px', height: '36px', borderRadius: '8px', border: '1px solid var(--border-color)',
                                    background: currentPage === page ? 'var(--primary-color)' : 'var(--card-bg)',
                                    color: currentPage === page ? 'white' : 'var(--text-main)',
                                    fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="btn btn-outline"
                        style={{ padding: '8px 16px', fontSize: '0.85rem', opacity: currentPage === totalPages ? 0.5 : 1 }}
                    >
                        Next
                    </button>
                </div>
            )}
        </motion.div>
    );
};

// --- Main Dashboard Component ---

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<AdminTab>('overview');
    const [stats, setStats] = useState({
        totalUsers: 0,
        premiumUsers: 0,
        totalAgents: 0,
        recentQuizCount: 0
    });
    const [usersList, setUsersList] = useState<any[]>([]);
    const [agentsList, setAgentsList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAgent, setEditingAgent] = useState<any>(null);
    const [formData, setFormData] = useState<any>({
        name: '', handle: '', phone: '', email: '', whatsapp: '', website: '', location: '', description: '', category: 'individual', rating: 5
    });

    // Fetch Initial Data
    const fetchData = async () => {
        setLoading(true);
        try {
            // 1. Fetch Users
            const usersSnap = await getDocs(collection(db, 'users'));
            const users = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            setUsersList(users);

            // 2. Fetch Agents
            const agentsSnap = await getDocs(collection(db, 'agents'));
            const agents = agentsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            setAgentsList(agents);

            // 3. Set Stats
            const premiumCount = users.filter((u: any) => u.isPremium).length;
            setStats({
                totalUsers: users.length,
                premiumUsers: premiumCount,
                totalAgents: agents.length,
                recentQuizCount: users.reduce((acc: number, u: any) => acc + (u.quizHistory?.length || 0), 0)
            });
        } catch (err) {
            console.error('Failed to fetch admin data:', err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleMigrate = async () => {
        setActionLoading(true);
        await migrateAgentsToFirestore();
        await fetchData();
        setActionLoading(false);
    };

    const togglePremium = async (userId: string, currentStatus: boolean) => {
        try {
            await updateDoc(doc(db, 'users', userId), { isPremium: !currentStatus });
            setUsersList(prev => prev.map(u => u.id === userId ? { ...u, isPremium: !currentStatus } : u));
        } catch (err) {
            console.error('Failed to toggle premium:', err);
        }
    };

    const deleteAgent = async (agentId: string) => {
        if (!window.confirm('Are you sure you want to delete this agent?')) return;
        try {
            await deleteDoc(doc(db, 'agents', agentId));
            setAgentsList(prev => prev.filter(a => a.id !== agentId));
        } catch (err) {
            console.error('Failed to delete agent:', err);
        }
    };

    const openAddModal = () => {
        setEditingAgent(null);
        setFormData({
            name: '', handle: '', phone: '', email: '', whatsapp: '', website: '', location: '', description: '', category: 'individual', rating: 5
        });
        setIsModalOpen(true);
    };

    const openEditModal = (agent: any) => {
        setEditingAgent(agent);
        setFormData({ ...agent });
        setIsModalOpen(true);
    };

    const saveAgent = async () => {
        setActionLoading(true);
        try {
            if (editingAgent) {
                const agentRef = doc(db, 'agents', editingAgent.id);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id, ...updateData } = formData;
                await updateDoc(agentRef, updateData);
            } else {
                await addDoc(collection(db, 'agents'), {
                    ...formData,
                    createdAt: new Date().toISOString()
                });
            }
            await fetchData();
            setIsModalOpen(false);
        } catch (err) {
            console.error('Failed to save agent:', err);
        }
        setActionLoading(false);
    };

    if (loading) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <LayoutDashboard size={40} color="var(--primary-color)" />
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)' }}>
            {/* Sidebar */}
            <motion.div 
                initial={{ x: -250 }} animate={{ x: 0 }}
                style={{ 
                    width: '260px', background: 'var(--card-bg)', borderRight: '1px solid var(--border-color)',
                    padding: '24px', display: 'flex', flexDirection: 'column'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                    <div style={{ 
                        background: 'var(--primary-color)', width: '32px', height: '32px', 
                        borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' 
                    }}>
                        <ShieldCheck size={18} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>LagosFit Admin</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                    <SidebarItem active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<LayoutDashboard size={18} strokeWidth={1.5} />} label="Overview" />
                    <SidebarItem active={activeTab === 'users'} onClick={() => setActiveTab('users')} icon={<Users size={18} strokeWidth={1.5} />} label="Users" />
                    <SidebarItem active={activeTab === 'agents'} icon={<Briefcase size={20} strokeWidth={1.5} />} label="Agents" onClick={() => setActiveTab('agents')} />
                    <SidebarItem active={activeTab === 'reviews'} icon={<Mail size={20} strokeWidth={1.5} />} label="Reviews" onClick={() => setActiveTab('reviews')} />
                    <SidebarItem active={activeTab === 'analytics'} icon={<BarChart3 size={20} strokeWidth={1.5} />} label="Analytics" onClick={() => setActiveTab('analytics')} />
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                    <SidebarItem onClick={() => logout()} icon={<LogOut size={18} strokeWidth={1.5} />} label="Logout" />
                </div>
            </motion.div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Welcome back, {user?.name || 'Admin'}</p>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && <OverviewTab stats={stats} />}
                    {activeTab === 'users' && <UsersTab users={usersList} togglePremium={togglePremium} />}
                    {activeTab === 'agents' && (
                        <AgentsTab 
                            agents={agentsList} 
                            deleteAgent={deleteAgent} 
                            onMigrate={handleMigrate} 
                            actionLoading={actionLoading} 
                            onEdit={openEditModal}
                            onAdd={openAddModal}
                        />
                    )}
                    {activeTab === 'reviews' && <AdminReviewsTab />}
                    {activeTab === 'analytics' && <AnalyticsTab stats={stats} users={usersList} />}
                </AnimatePresence>

                {/* Agent Modal */}
                {isModalOpen && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px'
                    }}>
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                            className="card" style={{ maxWidth: '600px', width: '100%', padding: '32px', maxHeight: '90vh', overflowY: 'auto' }}
                        >
                            <h2 style={{ marginBottom: '24px' }}>{editingAgent ? 'Edit Agent' : 'Add New Agent'}</h2>
                            
                            <div style={{ display: 'grid', gap: '16px' }}>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select 
                                        value={formData.category} 
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)' }}
                                    >
                                        <option value="individual">Individual Agent</option>
                                        <option value="agency">Agency</option>
                                        <option value="office">Office</option>
                                        <option value="social">Social Media (TikTok/IG)</option>
                                    </select>
                                </div>

                                {formData.category === 'social' ? (
                                    <div className="form-group">
                                        <label>Handle (@name)</label>
                                        <input type="text" value={formData.handle} onChange={e => setFormData({ ...formData, handle: e.target.value })} placeholder="@lagosagent" />
                                    </div>
                                ) : (
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Agent or Agency Name" />
                                    </div>
                                )}

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+234..." />
                                    </div>
                                    <div className="form-group">
                                        <label>WhatsApp</label>
                                        <input type="text" value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} placeholder="Same as phone?" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="contact@email.com" />
                                </div>

                                <div className="form-group">
                                    <label>Website / Social Link</label>
                                    <input type="text" value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })} placeholder="https://..." />
                                </div>

                                <div className="form-group">
                                    <label>Location / Address</label>
                                    <input type="text" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} placeholder="Lekki, Ikeja, etc." />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea 
                                        value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} 
                                        placeholder="Brief details about service..." rows={3}
                                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '32px' }}>
                                <button className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={saveAgent} disabled={actionLoading}>
                                    {actionLoading ? 'Saving...' : 'Save Agent'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
