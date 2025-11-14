import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiMonitor, FiSmartphone, FiLayers, FiImage, FiShoppingCart, FiTarget, FiGrid, FiRefreshCw } from 'react-icons/fi';
import './ServicePage.css';

const WebDesign = () => {
    const features = [
        { icon: FiMonitor, text: 'Custom Website Design' },
        { icon: FiSmartphone, text: 'Responsive & Mobile-First Design' },
        { icon: FiLayers, text: 'UI/UX Design & Prototyping' },
        { icon: FiImage, text: 'Brand Identity Integration' },
        { icon: FiShoppingCart, text: 'E-commerce Design Solutions' },
        { icon: FiTarget, text: 'Landing Page Design' },
        { icon: FiGrid, text: 'Design System Creation' },
        { icon: FiRefreshCw, text: 'Website Redesign Services' },
    ];

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <h1 className="service-title">
                        WEB <span className="highlight">DESIGN</span> SERVICES
                    </h1>
                    <p className="service-subtitle">
                        Creating stunning, user-friendly websites that captivate your audience and drive results.
                    </p>
                </div>
            </section>

            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Transform Your Digital Presence</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                Our web design services combine creativity with functionality to deliver websites 
                                that not only look amazing but also perform exceptionally. We focus on user experience, 
                                responsive design, and modern aesthetics that align with your brand identity.
                            </p>
                            <h3 className="service-features-title">What We Offer:</h3>
                            <ul className="service-features-modern">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <li key={index} className="service-feature-item">
                                            <Icon className="feature-icon" />
                                            <span>{feature.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <Link to="/contact" className="service-cta-modern">
                                Get Started Today
                            </Link>
                        </div>
                        <div className="service-content-right">
                            <div className="service-visual-element">
                                <div className="visual-gradient-blob blob-1"></div>
                                <div className="visual-gradient-blob blob-2"></div>
                                <div className="visual-gradient-blob blob-3"></div>
                                <div className="visual-illustration">
                                    <div className="illustration-card card-1"></div>
                                    <div className="illustration-card card-2"></div>
                                    <div className="illustration-card card-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDesign;

