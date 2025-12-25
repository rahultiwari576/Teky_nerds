import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiServer, FiLayers, FiDatabase, FiShoppingCart, FiGrid, FiZap, FiCheckCircle } from 'react-icons/fi';
import './ServicePage.css';

const WebDevelopment = () => {
    const expertise = [
        { icon: FiCode, text: 'Frontend Development (React, Vue, Angular)' },
        { icon: FiServer, text: 'Backend Development (Laravel, Node.js, Python)' },
        { icon: FiLayers, text: 'Full-Stack Applications' },
        { icon: FiZap, text: 'API Development & Integration' },
        { icon: FiDatabase, text: 'Database Design & Optimization' },
        { icon: FiShoppingCart, text: 'E-commerce Solutions' },
        { icon: FiGrid, text: 'CMS Development' },
    ];

    return (
        <div className="service-page">
            {/* Breadcrumb Navbar */}
            <nav className="service-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <div className="breadcrumb-links">
                            <Link to="/">Home</Link>
                            <span className="breadcrumb-separator">/</span>
                            <Link to="/services">Services</Link>
                            <span className="breadcrumb-separator">/</span>
                        </div>
                        <div className="breadcrumb-active">
                            <span>Web Development</span>
                        </div>
                        <div className="breadcrumb-actions">
                            <Link to="/contact" className="breadcrumb-button">Get started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="service-hero web-dev-hero">
                <div className="container">
                    <h1 className="service-title">WEB <span className="highlight">DEVELOPMENT</span> SERVICES</h1>
                    <p className="service-subtitle">
                        Building robust, scalable web applications using cutting-edge technologies and best practices.
                    </p>
                </div>
            </section>

            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Full-Stack Web Development</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                From frontend to backend, we develop complete web solutions that are fast, secure,
                                and scalable. Our team specializes in modern frameworks and technologies to deliver
                                high-performance applications.
                            </p>
                            <h3 className="service-features-title">Our Expertise:</h3>
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
                                Start Your Project
                            </Link>
                        </div>
                        <div className="service-content-right">
                            <div className="development-showcase">
                                <div className="code-window">
                                    <div className="code-header">
                                        <div className="code-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="code-title">app.js</div>
                                    </div>
                                    <div className="code-content">
                                        <div className="code-line">
                                            <span className="code-keyword">const</span> <span className="code-variable">app</span> = <span className="code-function">express</span>();
                                        </div>
                                        <div className="code-line">
                                            <span className="code-keyword">app</span>.<span className="code-function">get</span>(<span className="code-string">'/api'</span>, ...);
                                        </div>
                                        <div className="code-line">
                                            <span className="code-keyword">app</span>.<span className="code-function">listen</span>(<span className="code-number">3000</span>);
                                        </div>
                                    </div>
                                </div>
                                <div className="tech-badge badge-1">React</div>
                                <div className="tech-badge badge-2">Node.js</div>
                                <div className="tech-badge badge-3">MongoDB</div>
                                <div className="tech-badge badge-4">API</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;

