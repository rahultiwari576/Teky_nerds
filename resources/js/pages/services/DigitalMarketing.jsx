import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const DigitalMarketing = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero digital-marketing-hero">
                <div className="container">
                    <h1 className="service-title">
                        DIGITAL <span className="highlight">MARKETING</span> SERVICES
                    </h1>
                    <p className="service-subtitle">
                        Comprehensive digital marketing strategies to grow your brand and drive results.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;

