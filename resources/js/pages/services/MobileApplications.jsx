import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiTablet, FiLayers, FiImage, FiTrendingUp, FiZap, FiBell, FiRefreshCw } from 'react-icons/fi';
import './ServicePage.css';

const MobileApplications = () => {
    const expertise = [
        { icon: FiSmartphone, text: 'iOS App Development (Swift, Objective-C)' },
        { icon: FiTablet, text: 'Android App Development (Kotlin, Java)' },
        { icon: FiLayers, text: 'Cross-Platform Development (React Native, Flutter)' },
        { icon: FiImage, text: 'UI/UX Design for Mobile' },
        { icon: FiTrendingUp, text: 'App Store Optimization' },
        { icon: FiZap, text: 'API Integration' },
        { icon: FiBell, text: 'Push Notifications' },
        { icon: FiRefreshCw, text: 'App Maintenance & Updates' },
    ];

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <h1 className="service-title">MOBILE <span className="highlight">APP</span> SERVICES</h1>
                    <p className="service-subtitle">
                        Native and cross-platform mobile apps that deliver exceptional user experiences.
                    </p>
                </div>
            </section>

            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Build Powerful Mobile Experiences</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                We develop mobile applications for iOS and Android that are intuitive, performant,
                                and aligned with your business goals. From concept to launch, we handle every aspect
                                of mobile app development.
                            </p>
                            <h3 className="service-features-title">Our Mobile Solutions:</h3>
                            <ul className="service-features-modern">
                                {expertise.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={index} className="service-feature-item">
                                            <div className="feature-icon-wrapper">
                                                <Icon className="feature-icon" />
                                            </div>
                                            <span>{item.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <Link to="/contact" className="service-cta-modern">
                                Discuss Your App Idea
                            </Link>
                        </div>
                        <div className="service-content-right">
                            <div className="mobile-showcase">
                                <div className="phone-mockup phone-ios">
                                    <div className="phone-screen">
                                        <div className="phone-content">
                                            <div className="app-header">
                                                <div className="app-icon"></div>
                                                <div className="app-title">Mobile App</div>
                                            </div>
                                            <div className="app-features">
                                                <div className="app-feature"></div>
                                                <div className="app-feature"></div>
                                                <div className="app-feature"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="phone-mockup phone-android">
                                    <div className="phone-screen">
                                        <div className="phone-content">
                                            <div className="app-header">
                                                <div className="app-icon"></div>
                                                <div className="app-title">Mobile App</div>
                                            </div>
                                            <div className="app-features">
                                                <div className="app-feature"></div>
                                                <div className="app-feature"></div>
                                                <div className="app-feature"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tech-badge badge-1">iOS</div>
                                <div className="tech-badge badge-2">Android</div>
                                <div className="tech-badge badge-3">React Native</div>
                                <div className="tech-badge badge-4">Flutter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileApplications;

