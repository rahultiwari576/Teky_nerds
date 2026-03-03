import React, { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import './ChatWidget.css';

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, open]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMsg = { role: 'user', text: input.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setLoading(true);
        try {
            const res = await fetch('/api/v1/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userMsg.text }),
            });
            const data = await res.json();
            const botMsg = { role: 'bot', text: data.answer };
            setMessages((prev) => [...prev, botMsg]);
        } catch (err) {
            setMessages((prev) => [...prev, { role: 'bot', text: 'For detailed information, please contact our team.' }]);
        }
        setLoading(false);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <div
                className={`chat-button ${open ? 'hidden' : ''}`}
                onClick={() => setOpen(true)}
                title="Chat with us"
            >
                <FiMessageSquare size={24} />
            </div>

            {open && (
                <div className="chat-window">
                    <div className="chat-header">
                        <span>Support</span>
                        <button onClick={() => setOpen(false)}>
                            <FiX size={20} />
                        </button>
                    </div>
                    <div className="chat-body">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`chat-message ${m.role === 'bot' ? 'bot' : 'user'}`}
                            >
                                {m.text}
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>
                    <div className="chat-input-container">
                        <textarea
                            className="chat-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKey}
                            placeholder="Type your question..."
                            rows={1}
                        />
                        <button
                            className="chat-send-button"
                            onClick={sendMessage}
                            disabled={loading}
                        >
                            {loading ? '...' : <FiSend size={18} />}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
