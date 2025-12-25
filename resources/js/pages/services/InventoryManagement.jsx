import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiDatabase, FiActivity, FiTrendingUp, FiShoppingCart, FiZap, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';
import './ServicePage.css';

const InventoryManagement = () => {
    const expertise = [
        { icon: FiPackage, text: 'Inventory Tracking & Monitoring' },
        { icon: FiDatabase, text: 'Stock Management Systems' },
        { icon: FiActivity, text: 'Real-Time Analytics & Reporting' },
        { icon: FiTrendingUp, text: 'Demand Forecasting' },
        { icon: FiShoppingCart, text: 'Order Management Integration' },
        { icon: FiZap, text: 'Automated Reordering Systems' },
        { icon: FiRefreshCw, text: 'Inventory Optimization' },
        { icon: FiCheckCircle, text: 'Multi-Warehouse Management' },
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
                            <span>Inventory Management</span>
                        </div>
                        <div className="breadcrumb-actions">
                            <Link to="/contact" className="breadcrumb-button">Get started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="service-hero inventory-hero">
                <div className="container">
                    <h1 className="service-title">INVENTORY <span className="highlight">MANAGEMENT</span> SERVICES</h1>
                    <p className="service-subtitle">
                        Streamlining your inventory operations with intelligent management systems.
                    </p>
                </div>
            </section>

            <section className="service-content-modern">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-content-left">
                            <h2 className="service-subheading">Streamline Your Inventory Operations</h2>
                            <div className="service-divider"></div>
                            <p className="service-description-text">
                                At Tekynerds, we specialize in enhancing business success through efficient inventory management.
                                Our services empower businesses of all sizes and industries to streamline inventory, cut costs,
                                and boost productivity with intelligent management systems.
                            </p>
                            <h3 className="service-features-title">Our Inventory Solutions:</h3>
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
                            <div className="inventory-showcase">
                                <div className="dashboard-window">
                                    <div className="dashboard-header">
                                        <div className="dashboard-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="dashboard-title">Inventory Dashboard</div>
                                    </div>
                                    <div className="dashboard-content">
                                        <div className="dashboard-stats">
                                            <div className="stat-card">
                                                <div className="stat-icon"></div>
                                                <div className="stat-info">
                                                    <div className="stat-label">Total Items</div>
                                                    <div className="stat-value">1,234</div>
                                                </div>
                                            </div>
                                            <div className="stat-card">
                                                <div className="stat-icon"></div>
                                                <div className="stat-info">
                                                    <div className="stat-label">In Stock</div>
                                                    <div className="stat-value">892</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dashboard-chart">
                                            <div className="chart-bar" style={{ height: '60%' }}></div>
                                            <div className="chart-bar" style={{ height: '80%' }}></div>
                                            <div className="chart-bar" style={{ height: '45%' }}></div>
                                            <div className="chart-bar" style={{ height: '90%' }}></div>
                                            <div className="chart-bar" style={{ height: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tech-badge badge-1">Tracking</div>
                                <div className="tech-badge badge-2">Analytics</div>
                                <div className="tech-badge badge-3">Automation</div>
                                <div className="tech-badge badge-4">Reporting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InventoryManagement;

