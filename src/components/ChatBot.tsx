import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AREAS } from '../data/quiz_data';

const mascotImg = "/lagosfit_mascot_head.png"; 

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatBot = () => {
    const { language, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: t('buddy.welcome') || "Kedu! I'm Buddy, your LagosFit assistant. Need help finding a home or a vibe in Lagos?",
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
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GROQ_API_KEY;
            
            if (!apiKey || apiKey.includes('your_groq_key')) {
                throw new Error("Missing Groq API Key");
            }

            const systemContent = `
                You are "LagosFit Buddy", an expert AI mascot for the LagosFit platform.
                
                PERSONALITY:
                - Tone: Friendly, smart, and helpful.
                - Vibe: A Lagos "big boy/girl" who knows all the spots.
                - Current User Language: ${language}

                LANGUAGE RULES:
                - If User Language is "en", speak English with a touch of local slang.
                - DO NOT use heavy Pidgin unless the user starts it.
                
                KNOWLEDGE:
                - We match people with Lagos areas: ${AREAS.slice(0, 15).map(a => a.name).join(', ')}.
                - We offer a Lifestyle Quiz, Market Hub, and Budget Outings.
                - Encourage upgrading to "LagosFit Pro" for agent contacts.
            `;

            // Using direct Groq fetch for zero-dependency speed
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: systemContent },
                        ...messages.slice(-5).map(m => ({
                            role: m.sender === 'user' ? "user" : "assistant",
                            content: m.text
                        })),
                        { role: "user", content: currentInput }
                    ],
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Groq API Error');
            }

            const data = await response.json();
            const text = data.choices[0].message.content;

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (error: any) {
            console.error('Buddy (Groq) Error:', error);
            
            let errorMessage = "Omo, I'm having a small network glitch. Please try again!";
            
            if (error.message?.includes('rate_limit') || error.message?.includes('429')) {
                errorMessage = "Groq Limit Reached: I'm thinking too fast! Please wait 10 seconds and try again.";
            } else if (error.message?.includes('Missing Groq')) {
                errorMessage = "Config Error: Abeg, you need to add the VITE_GROQ_API_KEY to your .env file!";
            } else {
                errorMessage = `Buddy Error: ${error.message.substring(0, 50)}...`;
            }

            setMessages(prev => [...prev, {
                id: 'error-' + Date.now(),
                text: errorMessage,
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
