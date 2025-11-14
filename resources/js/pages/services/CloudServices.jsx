import React from 'react';
import { Link } from 'react-router-dom';
import { FiCloud, FiServer, FiShield, FiZap, FiDatabase, FiLayers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import './ServicePage.css';

const CloudServices = () => {
    const expertise = [
        { icon: FiCloud, text: 'Cloud Infrastructure Setup & Migration' },
        { icon: FiServer, text: 'Server Management & Optimization' },
        { icon: FiShield, text: 'Cloud Security & Compliance' },
        { icon: FiZap, text: 'Auto-Scaling & Load Balancing' },
        { icon: FiDatabase, text: 'Cloud Database Solutions' },
        { icon: FiLayers, text: 'Multi-Cloud Architecture' },
        { icon: FiTrendingUp, text: 'Performance Monitoring & Analytics' },
        { icon: FiCheckCircle, text: 'Disaster Recovery & Backup' },
    ];

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <h1 className="service-title">CLOUD <span className="highlight">SERVICES</span> SOLUTIONS</h1>
                    <p className="service-subtitle">
                        Scalable cloud infrastructure and services to power your business growth.
                    </p>
                </div>
            </section>

            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Power Your Business with Cloud Solutions</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                At Tekynerds, we specialize in providing scalable cloud infrastructure and services to power your business growth. 
                                Our cloud solutions empower businesses of all sizes to leverage the power of cloud computing for better scalability, 
                                security, and cost-efficiency.
                            </p>
                            <h3 className="service-features-title">Our Cloud Solutions:</h3>
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
                                Get Started
                            </Link>
                        </div>
                        <div className="service-content-right">
                            <div className="cloud-showcase">
                                <div className="cloud-infrastructure">
                                    <div className="cloud-server server-1">
                                        <div className="server-icon"></div>
                                        <div className="server-label">Server</div>
                                    </div>
                                    <div className="cloud-server server-2">
                                        <div className="server-icon"></div>
                                        <div className="server-label">Database</div>
                                    </div>
                                    <div className="cloud-server server-3">
                                        <div className="server-icon"></div>
                                        <div className="server-label">Storage</div>
                                    </div>
                                    <div className="cloud-connections">
                                        <div className="connection-line line-1"></div>
                                        <div className="connection-line line-2"></div>
                                        <div className="connection-line line-3"></div>
                                    </div>
                                </div>
                                <div className="tech-badge badge-1">AWS</div>
                                <div className="tech-badge badge-2">Azure</div>
                                <div className="tech-badge badge-3">GCP</div>
                                <div className="tech-badge badge-4">Docker</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudServices;

