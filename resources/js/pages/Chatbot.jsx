import React from 'react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <section className="py-16 md:py-24 bg-white">
                <div className="container text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">AI Chatbot Integration</h1>
                    <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                        Learn how we can help you automate customer interactions with custom chatbot solutions.
                    </p>
                </div>
            </section>
            <section className="py-16">
                <div className="container">
                    <div className="max-w-2xl mx-auto p-8 bg-white border border-[#E5E7EB] rounded-lg">
                        <p className="text-[#475569] mb-6">
                            This page will eventually describe the chatbot offering and how to get started.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1E3A8A] transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chatbot;
