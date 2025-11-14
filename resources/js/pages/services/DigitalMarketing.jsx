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
                            <Link to="/login" className="breadcrumb-link">Login</Link>
                            <Link to="/contact" className="breadcrumb-button">Get started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="service-hero-modern">
                <div className="service-hero-background">
                    <div className="bg-element bg-table"></div>
                    <div className="bg-element bg-chart"></div>
                    <div className="bg-element bg-graph"></div>
                    <div className="bg-element bg-logo bg-logo-1">GONG</div>
                    <div className="bg-element bg-logo bg-logo-2">HubSpot</div>
                    <div className="bg-element bg-logo bg-logo-3">INTERCOM</div>
                    <div className="bg-element bg-logo bg-logo-4">asana</div>
                    <div className="bg-element bg-text bg-text-1">Visitors</div>
                    <div className="bg-element bg-text bg-text-2">Companies</div>
                    <div className="bg-element bg-text bg-text-3">Platform</div>
                    <div className="bg-element bg-text bg-text-4">Customers</div>
                    <div className="bg-element bg-text bg-text-5">Company</div>
                    <div className="bg-element bg-text bg-text-6">Resources</div>
                </div>
                <div className="container">
                    <div className="service-hero-content">
                        <div className="service-hero-left">
                            <h1 className="service-title-modern">
                                DIGITAL<br />
                                MARKETING<br />
                                <span className="highlight-modern">SOLUTION</span>
                            </h1>
                            <p className="service-faint-text">
                                Clearbit gives you full co and company in your target marke more reach and convert more cus predictably.
                            </p>
                        </div>
                        <div className="service-hero-right">
                            <p className="service-description">
                                At Tekynerds, We Specialize In Delivering Comprehensive Digital Marketing Solutions That Drive Real Business Results. Our Strategic Approach Combines Data-Driven Insights, Creative Campaigns, And Performance Optimization To Maximize Your ROI And Accelerate Your Growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;

