import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const WebDevelopment = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <h1 className="service-title">WEB <span className="highlight">DEVELOPMENT</span> SERVICES</h1>
                    <p className="service-subtitle">
                        Building robust, scalable web applications using cutting-edge technologies and best practices.
                    </p>
                </div>
            </section>

            <section className="service-content">
                <div className="container">
                    <div className="service-details">
                        <div className="service-text">
                            <h2>Full-Stack Web Development</h2>
                            <p>
                                From frontend to backend, we develop complete web solutions that are fast, secure, 
                                and scalable. Our team specializes in modern frameworks and technologies to deliver 
                                high-performance applications.
                            </p>
                            <h3>Our Expertise:</h3>
                            <ul className="service-features">
                                <li>Frontend Development (React, Vue, Angular)</li>
                                <li>Backend Development (Laravel, Node.js, Python)</li>
                                <li>Full-Stack Applications</li>
                                <li>API Development & Integration</li>
                                <li>Database Design & Optimization</li>
                                <li>E-commerce Solutions</li>
                                <li>CMS Development</li>
                                <li>Progressive Web Apps (PWA)</li>
                            </ul>
                            <Link to="/contact" className="service-cta">
                                Start Your Project
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

export default WebDevelopment;

