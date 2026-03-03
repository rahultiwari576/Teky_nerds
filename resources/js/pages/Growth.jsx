import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiFileText, FiMonitor, FiCode } from 'react-icons/fi';
import './Growth.css';
import SEO from '../components/SEO';

const Growth = () => {
    const processSteps = [
        { icon: FiZap, title: 'Discovery Workshop', description: 'This brings alignment in terms of end-user persona and business needs.' },
        { icon: FiFileText, title: 'Planning', description: 'Emphasize on planning to get everything documented without assumption.' },
        { icon: FiMonitor, title: 'Design', description: 'Next step is to design the UI based on the approved wireframes.' },
        { icon: FiCode, title: 'Development', description: 'Crafting an optimized clean code structure is our objective at this stage.' },
    ];

    return (
        <div className="growth-page">
            <SEO
                title="Growth Strategy - Tekynerds"
                description="Growth services from Tekynerds: discovery, planning, design and development to turn ideas into user-friendly digital products."
            />
            <section className="growth-hero">
                <div className="container">
                    <h1 className="growth-hero-title">
                        Crafting <span className="highlight">The Foundation</span> for Digital Success
                    </h1>
                    <p className="growth-hero-desc">
                        Success begins with planning, design, development, testing, and delivering a product that meets user and business needs.
                    </p>
                </div>
            </section>

            <section className="growth-content">
                <div className="container">
                    <div className="growth-grid">
                        <div className="growth-steps">
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="growth-step">
                                        <div className="growth-step-num">{index + 1}</div>
                                        <div>
                                            <h3 className="growth-step-title">{step.title}</h3>
                                            <p className="growth-step-desc">{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <h2 className="growth-details-title">Turning Ideas Into User-Friendly Realities</h2>
                            <p className="growth-details-subtitle">Guiding your project toward success, one step at a time.</p>

                            <div className="growth-detail-section">
                                <h3 className="growth-detail-heading">Planning</h3>
                                <p className="growth-detail-text">
                                    Imagine this phase as the blueprint of your project. It's like preparing a recipe — you jot down every ingredient and step without making assumptions. This meticulous planning ensures we know exactly what we're building, aligning our project's goals with the people who will use it.
                                </p>
                            </div>
                            <div className="growth-detail-section">
                                <h3 className="growth-detail-heading">Design</h3>
                                <p className="growth-detail-text">
                                    Now, picture the design phase as the creative part, like decorating a cake. We take the wireframes and turn them into something visually appealing, while still making sure it works great for our users. It's about making something that's not only beautiful but also user-friendly.
                                </p>
                            </div>
                            <div className="growth-detail-section">
                                <h3 className="growth-detail-heading">Development</h3>
                                <p className="growth-detail-text">
                                    Development is where the magic happens. It's like building a sturdy foundation for a house. We craft clean, efficient code that ensures your project stands the test of time. Every line of code is written with precision and care, ensuring optimal performance and scalability.
                                </p>
                            </div>

                            <Link to="/contact" className="growth-cta-btn">
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Growth;
