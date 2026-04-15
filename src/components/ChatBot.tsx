import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AREAS } from '../data/quiz_data';
import { AGENTS } from '../data/agents_data';
import { PLACES_TO_VISIT } from '../data/lifestyle_data';

// Initialize Gemini (User needs to provide VITE_GEMINI_API_KEY)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const mascotImg = "/lagosfit_mascot_head.png"; 

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Kedu! (Hello!) I'm Buddy, your LagosFit assistant. I know Lagos like the back of my hand. Ask me about house prices in Lekki, the best vibes in Ikeja, or how to get a verified agent!",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const systemPrompt = `
                You are "LagosFit Buddy", a friendly and street-smart AI mascot for the LagosFit platform.
                
                YOUR KNOWLEDGE BASE:
                - AREAS: ${AREAS.map(a => `${a.name}: ${a.description.en}`).join(' | ')}
                - AGENTS: ${AGENTS.slice(0, 5).map(a => a.name).join(', ')}
                - SPOTS: ${PLACES_TO_VISIT.slice(0, 3).map(p => p.name).join(', ')}
                
                FEATURES:
                - Market: Listing search.
                - Budget Explorer (PRO): 45+ budget spots.
                - Quiz: Finding a home.
                
                TONE: Helpful, professional yet local (use occasional light Nigerian English like "Abeg", "Beta", "Sharp sharp").
                Always encourage Upgrading to Pro for direct agent contacts.
                
                USER: ${input}
            `;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            const text = response.text();

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Gemini Error:', error);
            setMessages(prev => [...prev, {
                id: 'error',
                text: "Ah, my network is dragging a bit. Please try asking again in a second!",
                sender: 'bot',
                timestamp: new Date()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
            {/* Toggle Button / Mascot */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '64px', height: '64px',
                    borderRadius: '50%',
                    background: 'var(--primary-color)',
                    border: '4px solid white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', padding: 0
                }}
            >
                <img src={mascotImg} alt="Buddy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        style={{
                            position: 'absolute', bottom: '80px', right: 0,
                            width: '360px', height: '500px',
                            maxWidth: 'calc(100vw - 48px)',
                            background: 'var(--card-bg)',
                            borderRadius: '24px',
                            boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
                            display: 'flex', flexDirection: 'column',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '20px', background: 'var(--primary-color)', color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', overflow: 'hidden' }}>
                                    <img src={mascotImg} alt="Buddy" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Buddy (LagosFit AI)</div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Sparkles size={10} /> Online & ready to help
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-color)' }}>
                            {messages.map((msg) => (
                                <div key={msg.id} style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    display: 'flex', gap: '8px',
                                    flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
                                }}>
                                    <div style={{
                                        padding: '12px 16px',
                                        borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                        background: msg.sender === 'user' ? 'var(--primary-color)' : 'var(--card-bg)',
                                        color: msg.sender === 'user' ? 'white' : 'var(--text-main)',
                                        fontSize: '0.9rem',
                                        boxShadow: 'var(--shadow)',
                                        border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                                        lineHeight: 1.5
                                    }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div style={{ alignSelf: 'flex-start', background: 'var(--card-bg)', padding: '12px 16px', borderRadius: '18px', display: 'flex', gap: '4px', border: '1px solid var(--border-color)' }}>
                                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }} />
                                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }} />
                                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }} />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div style={{ padding: '16px', background: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="text"
                                    placeholder="Ask Buddy anything..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    style={{
                                        flex: 1, padding: '12px 16px', borderRadius: '24px',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--secondary-bg)',
                                        color: 'var(--text-main)',
                                        fontSize: '0.9rem', outline: 'none'
                                    }}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    style={{
                                        width: '42px', height: '42px', borderRadius: '50%',
                                        background: 'var(--primary-color)', color: 'white',
                                        border: 'none', cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        opacity: (!input.trim() || isLoading) ? 0.5 : 1
                                    }}
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatBot;
