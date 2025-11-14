import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'CODING',
            path: '/services/web-development',
            color: '#ffb3d9'
        },
        {
            title: 'BUSINESS',
            path: '/services/inventory-management',
            color: '#d4b3ff'
        },
        {
            title: 'WEBSITE',
            path: '/services/web-design',
            color: '#fff4b3'
        },
        {
            title: 'BLOGS',
            path: '/blog',
            color: '#b3ffb3'
        },
        {
            title: 'GRAPHICS',
            path: '/services/graphics',
            color: '#f5f5f5'
        },
        {
            title: 'GROWTH',
            path: '/growth',
            color: '#ffb3e6'
        },
    ];

    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title">OUR <span className="highlight">SERVICES</span></h1>
                    <p className="page-subtitle">
                        Comprehensive digital solutions to transform your business
                    </p>
                </div>
            </section>

            <section className="services-grid-section">
                <div className="container">
                    <h2 className="categories-title">Categories</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Link 
                                key={index} 
                                to={service.path} 
                                className="service-card"
                                style={{ backgroundColor: service.color }}
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

