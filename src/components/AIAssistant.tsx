
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AREAS } from '../data/quiz_data';
import { useLanguage } from '../context/LanguageContext';
import { PLACES_TO_VISIT, WHAT_TO_EAT } from '../data/lifestyle_data';
import { AGENTS, AGENCIES, TIKTOK_HANDLES } from '../data/agents_data';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    type?: 'text' | 'area_card';
    metadata?: any;
}

const AIAssistant = () => {
    const { user } = useAuth();
    const { language, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(() => {
        const saved = localStorage.getItem('lagosfit_chat_history');
        if (saved) {
            try {
                return JSON.parse(saved).map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
            } catch (e) { return []; }
        }
        return [
            {
                id: '1',
                role: 'assistant',
                content: t('ai.greeting').replace('Hi!', `Hi ${user?.name || ''}!`),
                timestamp: new Date(),
                type: 'text'
            }
        ];
    });
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        localStorage.setItem('lagosfit_chat_history', JSON.stringify(messages));
    }, [messages]);

    const clearChat = () => {
        if (window.confirm(t('ai.clear_confirm'))) {
            localStorage.removeItem('lagosfit_chat_history');
            setMessages([{
                id: '1',
                role: 'assistant',
                content: t('ai.greeting'),
                timestamp: new Date(),
                type: 'text'
            }]);
        }
    };

    const handleSend = async (queryOverride?: string) => {
        const text = queryOverride || input.trim();
        if (!text || isTyping) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: text,
            timestamp: new Date(),
            type: 'text'
        };

        setMessages((prev: Message[]) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getSmartResponse(text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: botResponse.text,
                timestamp: new Date(),
                type: botResponse.type || 'text',
                metadata: botResponse.metadata
            };
            setMessages((prev: Message[]) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const getSmartResponse = (query: string): { text: string; type?: 'text' | 'area_card'; metadata?: any } => {
        const q = query.toLowerCase();
        const isPidgin = language === 'pidgin';

        const mentionedArea = AREAS.find(a => q.includes(a.name.toLowerCase()));
        if (mentionedArea) {
            const text = isPidgin 
                ? `${mentionedArea.name} set! ${mentionedArea.description.pidgin} Check the details for the card I just drop for you.`
                : `${mentionedArea.name} is a fantastic choice. ${mentionedArea.description[language] || mentionedArea.description.en} I've generated a summary card for you below:`;
            return { text, type: 'area_card', metadata: { area: mentionedArea } };
        }

        if (q.includes('price') || q.includes('cost') || q.includes('pro') || q.includes('subscription')) {
            return { 
                text: isPidgin 
                    ? `LagosFit Pro na ₦4,500/month or ₦36,000/year. You go get direct agent numbers, WhatsApp chat, and ${TIKTOK_HANDLES.length} TikTok guides. No more stress!` 
                    : `LagosFit Pro costs ₦4,500/month or ₦36,000/year. You'll unlock verified agent contacts, direct WhatsApp links, and ${TIKTOK_HANDLES.length} virtual home tours via TikTok.`
            };
        }

        if (q.includes('agent') || q.includes('realtor') || q.includes('house')) {
            const agentCount = AGENTS.length + AGENCIES.length;
            return { 
                text: isPidgin 
                    ? `We get ${agentCount} verified agents and agencies like ${AGENCIES[0].name}. Pro users fit chat them sharply for WhatsApp. Check the Market page!` 
                    : `We have ${agentCount} verified agents and agencies like ${AGENCIES[0].name}. Pro members can access direct contact details and virtual tours on the Market page.`
            };
        }

        if (q.includes('food') || q.includes('chop') || q.includes('eat') || q.includes('lifestyle')) {
            const topSpot = PLACES_TO_VISIT[0];
            const topChop = WHAT_TO_EAT.fineDining[0];
            return { 
                text: isPidgin 
                    ? `If you wan jaiye, check ${topSpot.name}. For better food, ${topChop.name} set well well. Check our Blog for more gbedu!` 
                    : `For a great time, check out ${topSpot.name}. For dining, ${topChop.name} is a top choice. Visit our blog for the full Lagos guide!`
            };
        }

        const fallbacks = isPidgin 
            ? ["I dey here to help you move sharply!", "You know say Pro users fit see TikTok house tours?", "I fit help you with areas, money matter, or lifestyle. Wetin be your wahala?"]
            : ["I'm here to make your Lagos move easy!", "Did you know Pro users get access to TikTok property tours?", "I can help with neighborhoods, pricing, or lifestyle tips. Ask me anything!"];

        return { text: fallbacks[Math.floor(Math.random() * fallbacks.length)] };
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '56px', height: '56px', borderRadius: '28px',
                    background: 'var(--primary-color)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(var(--primary-rgb), 0.4)',
                    border: 'none', cursor: 'pointer'
                }}
            >
                {isOpen ? <ChevronDown size={24} /> : <MessageSquare size={24} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        style={{
                            position: 'absolute', bottom: '70px', right: 0,
                            width: 'min(380px, 90vw)', height: 'min(580px, 80vh)',
                            background: 'var(--card-bg)', borderRadius: '20px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                            display: 'flex', flexDirection: 'column', overflow: 'hidden',
                            border: '1px solid var(--border-color)', zIndex: 1001
                        }}
                    >
                        <div style={{ padding: '16px 20px', background: 'var(--primary-color)', color: 'white' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Bot size={20} />
                                    <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t('ai.title')}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={clearChat} title={t('ai.clear_chat')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.7 }}>
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div ref={scrollRef} style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-color)' }}>
                            {messages.map((msg) => (
                                <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '8px' }}>
                                    <div style={{ 
                                        maxWidth: '85%', padding: '10px 14px', borderRadius: '15px',
                                        fontSize: '0.88rem', lineHeight: 1.5,
                                        background: msg.role === 'user' ? 'var(--primary-color)' : 'var(--card-bg)',
                                        color: msg.role === 'user' ? 'white' : 'var(--text-main)',
                                        border: msg.role === 'assistant' ? '1px solid var(--border-color)' : 'none',
                                        whiteSpace: 'pre-wrap'
                                    }}>
                                        {msg.content}
                                    </div>

                                    {msg.type === 'area_card' && (
                                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ width: '100%', maxWidth: '280px', borderRadius: '16px', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                            <div style={{ padding: '12px', background: 'var(--secondary-bg)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Bot size={14} color="var(--primary-color)" />
                                                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Area Insight</span>
                                            </div>
                                            <div style={{ padding: '12px' }}>
                                                <h5 style={{ margin: '0 0 4px 0', color: 'var(--primary-color)' }}>{msg.metadata.area.name}</h5>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Rent: {msg.metadata.area.priceRange[language] || msg.metadata.area.priceRange.en}</div>
                                                <p style={{ fontSize: '0.8rem', marginBottom: '12px' }}>{msg.metadata.area.description[language] || msg.metadata.area.description.en}</p>
                                                <button onClick={() => window.location.href = `/explore?id=${msg.metadata.area.id}`} style={{ width: '100%', padding: '8px', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem' }}>Check Full Stats</button>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div style={{ display: 'flex' }}>
                                    <div style={{ padding: '10px 14px', borderRadius: '15px', background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                                        <Loader2 size={14} className="spinner" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{ padding: '14px', background: 'var(--card-bg)', display: 'flex', gap: '8px', borderTop: '1px solid var(--border-color)' }}>
                            <input value={input} onChange={e => setInput(e.target.value)} placeholder={t('ai.placeholder')} style={{ flex: 1, padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--secondary-bg)', color: 'var(--text-main)', outline: 'none' }} />
                            <button type="submit" style={{ background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '10px', width: '40px', height: '40px', cursor: 'pointer' }}><Send size={16} /></button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AIAssistant;
