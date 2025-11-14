import React from 'react';
import { FiZap, FiFileText, FiMonitor, FiCode } from 'react-icons/fi';
import './Growth.css';

const Growth = () => {
    const processSteps = [
        {
            icon: FiZap,
            title: 'DISCOVERY WORKSHOP',
            description: 'THIS BRINGS ALIGNMENT IN TERMS OF END-USER PERSONA AND BUSINESS NEEDS'
        },
        {
            icon: FiFileText,
            title: 'PLANNING',
            description: 'EMPHASIZE ON PLANNING TO GET EVERYTHING DOCUMENTED WITHOUT ASSUMPTION'
        },
        {
            icon: FiMonitor,
            title: 'DESIGN',
            description: 'NEXT STEP IS TO DESIGN THE UI BASED ON THE APPROVED WIREFRAMES'
        },
        {
            icon: FiCode,
            title: 'DEVELOPMENT',
            description: 'CRAFTING AN OPTIMIZED CLEAN CODE STRUCTURE IS OUR OBJECTIVE AT THIS STAGE'
        }
    ];

    return (
        <div className="growth-page">
            <section className="growth-hero">
                <div className="container">
                    <h1 className="page-title">
                        CRAFTING <span className="highlight">THE FOUNDATION</span> DIGITAL SUCCESS
                    </h1>
                    <p className="page-subtitle">
                        Success begins with planning, design, development, testing, delivering a product meeting user and business needs.
                    </p>
                </div>
            </section>

            <section className="growth-content">
                <div className="container">
                    <div className="growth-wrapper">
                        <div className="process-flow">
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="process-step"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <div className="step-number">{index + 1}</div>
                                        <div className="step-icon-wrapper">
                                            <div className="step-icon">
                                                <Icon />
                                            </div>
                                        </div>
                                        <div className="step-content">
                                            <h3 className="step-title">{step.title}</h3>
                                            <p className="step-description">{step.description}</p>
                                        </div>
                                        {index < processSteps.length - 1 && (
                                            <div className="step-connector">
                                                <div className="connector-line"></div>
                                                <div className="connector-arrow">↓</div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="process-details">
                            <h2 className="details-title">TURNING IDEAS INTO USER-FRIENDLY REALITIES</h2>
                            <p className="details-subtitle">GUIDING YOUR PROJECT TOWARD SUCCESS, ONE STEP AT A TIME</p>

                            <div className="detail-section">
                                <h3 className="detail-heading highlight">Planning :-</h3>
                                <p>
                                    Imagine this phase as the blueprint of your project. It's like preparing a recipe 
                                    you jot down every ingredient and step without making assumptions. This meticulous 
                                    planning ensures we know exactly what we're cooking up, aligning our project's 
                                    goals with the people who will use it.
                                </p>
                            </div>

                            <div className="detail-section">
                                <h3 className="detail-heading highlight">Design :-</h3>
                                <p>
                                    Now, picture the design phase as the creative part, like decorating a cake. We take 
                                    the wireframes and turn them into something visually appealing, while still making 
                                    sure it tastes great for our users. It's about making something that's not only 
                                    beautiful but also user-friendly.
                                </p>
                            </div>

                            <div className="detail-section">
                                <h3 className="detail-heading highlight">Development :-</h3>
                                <p>
                                    Development is where the magic happens. It's like building a sturdy foundation for 
                                    a house. We craft clean, efficient code that ensures your project stands the test 
                                    of time. Every line of code is written with precision and care, ensuring optimal 
                                    performance and scalability.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Growth;

