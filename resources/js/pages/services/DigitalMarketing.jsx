import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const DigitalMarketing = () => {
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
                            <span>Digital Marketing</span>
                        </div>
                        <div className="breadcrumb-actions">
                            <Link to="/contact" className="breadcrumb-button">Get started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="service-hero">
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

