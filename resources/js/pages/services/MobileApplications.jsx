import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const MobileApplications = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <h1 className="service-title">MOBILE <span className="highlight">APPLICATIONS</span> DEVELOPMENT</h1>
                    <p className="service-subtitle">
                        Native and cross-platform mobile apps that deliver exceptional user experiences.
                    </p>
                </div>
            </section>

            <section className="service-content">
                <div className="container">
                    <div className="service-details">
                        <div className="service-text">
                            <h2>Build Powerful Mobile Experiences</h2>
                            <p>
                                We develop mobile applications for iOS and Android that are intuitive, performant, 
                                and aligned with your business goals. From concept to launch, we handle every aspect 
                                of mobile app development.
                            </p>
                            <h3>Our Mobile Solutions:</h3>
                            <ul className="service-features">
                                <li>iOS App Development (Swift, Objective-C)</li>
                                <li>Android App Development (Kotlin, Java)</li>
                                <li>Cross-Platform Development (React Native, Flutter)</li>
                                <li>UI/UX Design for Mobile</li>
                                <li>App Store Optimization</li>
                                <li>API Integration</li>
                                <li>Push Notifications</li>
                                <li>App Maintenance & Updates</li>
                            </ul>
                            <Link to="/contact" className="service-cta">
                                Discuss Your App Idea
                            </Link>
                        </div>
                        <div className="service-image">
                            <div className="service-mockup">
                                <div className="mockup-content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileApplications;

