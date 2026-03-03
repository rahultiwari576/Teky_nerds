import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

import SEO from '../../components/SEO';

const DigitalMarketing = () => {
    const offerings = [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Paid Advertising (PPC & Display)',
        'Content Strategy & Copywriting',
        'Email Marketing & Automation',
        'Analytics & Conversion Optimization'
    ];

    const process = [
        'Initial audit & goal setting',
        'Strategy development',
        'Campaign creation & execution',
        'Tracking & analytics',
        'Iterate and optimize'
    ];

    const benefits = [
        'Increased organic visibility and traffic',
        'Higher lead generation and conversion rates',
        'Improved brand authority and customer engagement',
        'Measurable ROI with transparent reporting',
        'Scalable campaigns that adapt to your growth'
    ];

    return (
        <div className="service-page">
            <SEO
                title="Digital Marketing Services - Tekynerds"
                description="Comprehensive SEO, PPC, social media, and content marketing services to grow your brand and drive measurable results."
            />
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

            {/* Overview & details */}
            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Overview</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                Our digital marketing services are designed for businesses that want to establish a
                                commanding online presence. From organic search to paid channels, our team crafts
                                data‑driven campaigns that attract, engage and convert your target audience.
                            </p>

                            <h3 className="service-features-title">Key Offerings</h3>
                            <ul className="service-features-modern">
                                {offerings.map((item, idx) => (
                                    <li key={idx} className="service-feature-item">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="service-features-title">Our Process</h3>
                            <ul className="service-features-modern">
                                {process.map((step, idx) => (
                                    <li key={idx} className="service-feature-item">
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="service-features-title">Benefits</h3>
                            <ul className="service-features-modern">
                                {benefits.map((b, idx) => (
                                    <li key={idx} className="service-feature-item">
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="service-cta-modern">
                                Get a Free Consultation
                            </Link>
                        </div>
                        <div className="service-content-right">
                            {/* graphic placeholder */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;

