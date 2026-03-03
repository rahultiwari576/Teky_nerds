import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiTool, FiDatabase, FiZap, FiShield, FiMessageSquare } from 'react-icons/fi';
import './services/ServicePage.css';

const Chatbot = () => {
    const offerings = [
        { icon: FiTool, text: 'Custom Chatbot Development' },
        { icon: FiMessageSquare, text: 'AI‑Driven Conversational Interfaces' },
        { icon: FiZap, text: 'GPT‑3/4 & OpenAI API Integration' },
        { icon: FiDatabase, text: 'Chat History & Analytics' },
        { icon: FiShield, text: 'Security & Privacy Compliance' },
        { icon: FiCheckCircle, text: 'Multichannel Deployment (Web/Mobile)' }
    ];

    const processSteps = [
        'Discovery & Requirements Gathering',
        'Design & Conversation Flow Mapping',
        'Development & AI Model Tuning',
        'Testing & User Training',
        'Deployment & Ongoing Maintenance'
    ];

    const benefits = [
        '24/7 customer engagement without additional headcount',
        'Faster response times and reduced support costs',
        'Data‑driven insights into user behaviour',
        'Custom prompts aligned with your brand voice',
        'Scalable solution that grows with your business'
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero chatbot-hero">
                <div className="container">
                    <h1 className="service-title">
                        AI <span className="highlight">CHATBOT</span> INTEGRATION
                    </h1>
                    <p className="service-subtitle">
                        Automate customer conversations with intelligent, secure and brand‑aligned chatbots.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Overview</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                At Tekynerds we build AI chatbots that feel natural, help users quickly find
                                information and take action. Leveraging the latest language models, our solutions
                                can be integrated into websites, mobile apps or messaging platforms and are fully
                                customizable to your industry and workflow.
                            </p>

                            <h3 className="service-features-title">Key Offerings:</h3>
                            <ul className="service-features-modern">
                                {offerings.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={idx} className="service-feature-item">
                                            <div className="feature-icon-wrapper">
                                                <Icon className="feature-icon" />
                                            </div>
                                            <span>{item.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <h3 className="service-features-title">Our Process</h3>
                            <ul className="service-features-modern">
                                {processSteps.map((step, idx) => (
                                    <li key={idx} className="service-feature-item">
                                        <div className="feature-icon-wrapper">
                                            <FiCheckCircle className="feature-icon" />
                                        </div>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="service-features-title">Benefits</h3>
                            <ul className="service-features-modern">
                                {benefits.map((b, idx) => (
                                    <li key={idx} className="service-feature-item">
                                        <div className="feature-icon-wrapper">
                                            <FiCheckCircle className="feature-icon" />
                                        </div>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="service-features-title">Pricing</h3>
                            <p className="service-description-text">
                                Chatbot setup: ₹25,000 – ₹1,35,000 (one‑time)<br />
                                Monthly maintenance & monitoring: ₹5,000 – ₹25,000 / month
                            </p>

                            <Link to="/contact" className="service-cta-modern">
                                Talk to an Expert
                            </Link>
                        </div>
                        <div className="service-content-right">
                            {/* graphic placeholder could be added here if desired */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chatbot;
