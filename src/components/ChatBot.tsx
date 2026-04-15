import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AREAS } from '../data/quiz_data';

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
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey || apiKey === 'PASTE_YOUR_GOOGLE_AI_KEY_HERE') {
                throw new Error("Missing Gemini API Key. Please add VITE_GEMINI_API_KEY to your settings.");
            }

            // Initialize inside the function to ensure the key is captured
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const systemPrompt = `
                You are "LagosFit Buddy", a friendly and street-smart AI mascot for the LagosFit platform.
                
                KNOWLEDGE:
                - We help people move to Lagos. We have areas like ${AREAS.slice(0, 10).map(a => a.name).join(', ')}.
                - Features: Market (listings), Lagos on a Budget (PRO guide), Finding a home Quiz.
                
                TONE: Friendly, local Lagosian style. Use light pidgin ("Abeg", "Beta", "Sharp").
                
                TASK: Answer accurately about Lagos. Encourage Upgrading to Pro for extra features.
            `;

            const fullPrompt = `${systemPrompt}\n\nUser Question: ${input}`;
            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            const text = response.text();

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (error: any) {
            console.error('Gemini Error Details:', error);
            
            let errorMessage = "Ah, my network is dragging a bit. Please try asking again!";
            
            // Detailed debugging for the user
            if (error.message?.includes('API_KEY_INVALID')) {
                errorMessage = "Error: Your Gemini API Key looks invalid. Please check it in Vercel/DOTENV.";
            } else if (error.message?.includes('Missing Gemini')) {
                errorMessage = "Error: I can't find your Gemini API Key in the settings!";
            } else if (error.message) {
                errorMessage = `Buddy is struggling: ${error.message.substring(0, 50)}...`;
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
