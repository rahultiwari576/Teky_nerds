import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiTrendingUp, FiMail, FiMenu, FiX, FiChevronDown, FiDollarSign } from 'react-icons/fi';
import './Layout.css';
import ChatWidget from './ChatWidget';

const Layout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => path && (location.pathname === path || location.pathname.startsWith(path + '/'));

    const serviceItems = [
        { path: '/services/web-design', label: 'Web Design' },
        { path: '/services/web-development', label: 'Web Development' },
        { path: '/services/mobile-applications', label: 'Mobile App' },
        { path: '/services/inventory-management', label: 'Inventory Management' },
        { path: '/services/cloud-services', label: 'Cloud Solutions' },
        { path: '/services/digital-marketing', label: 'Digital Marketing' },
    ];

    const navItems = [
        { path: '/', label: 'Home', icon: FiHome },
        { path: null, label: 'Services', icon: FiBriefcase, isDropdown: true },
        { path: '/about', label: 'About', icon: FiUser },
        { path: '/blog', label: 'Blog', icon: FiFileText },
        { path: '/growth', label: 'Growth', icon: FiTrendingUp },
        { path: '/pricing', label: 'Pricing', icon: FiDollarSign },
        { path: '/contact', label: 'Contact', icon: FiMail },
    ];

    const LogoIcon = () => (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#1E3A8A" />
            <path d="M12 20L18 14L20 16L28 8L30 10L20 20L18 18L12 24V20Z" fill="white" />
            <path d="M20 22L28 14L30 16L32 14L30 12L20 22Z" fill="white" opacity="0.85" />
        </svg>
    );

    return (
        <div className="layout">
            <header className={`layout-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="layout-header-inner">
                    <Link to="/" className="layout-logo">
                        <LogoIcon />
                        <div className="layout-logo-text">
                            <span className="layout-logo-title">Tekynerds</span>
                            <span className="layout-logo-tagline">nerds of tech</span>
                        </div>
                    </Link>

                    <nav className="layout-nav" role="navigation" aria-label="Main navigation">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            if (item.isDropdown) {
                                return (
                                    <div
                                        key="services-dropdown"
                                        className="layout-dropdown"
                                        onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
                                        onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
                                    >
                                        <div
                                            className={`layout-dropdown-trigger ${isActive('/services') ? 'active' : ''}`}
                                            onClick={() => isMobile && setServicesDropdownOpen(!servicesDropdownOpen)}
                                            role="button"
                                            aria-expanded={servicesDropdownOpen}
                                            aria-haspopup="true"
                                        >
                                            <Icon size={16} />
                                            {item.label}
                                            <FiChevronDown className={`layout-dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`} size={16} />
                                        </div>
                                        {servicesDropdownOpen && (
                                            <div className="layout-dropdown-menu" role="menu">
                                                {serviceItems.map((service) => (
                                                    <Link
                                                        key={service.path}
                                                        to={service.path}
                                                        className={`layout-dropdown-item ${isActive(service.path) ? 'active' : ''}`}
                                                        onClick={() => { setMobileMenuOpen(false); setServicesDropdownOpen(false); }}
                                                        role="menuitem"
                                                    >
                                                        {service.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`layout-nav-link ${isActive(item.path) ? 'active' : ''}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Icon size={16} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <Link to="/contact" className="layout-cta-btn">
                        Get Started
                    </Link>

                    <button
                        type="button"
                        className="layout-mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="layout-mobile-menu">
                        <div className="layout-mobile-nav">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                if (item.isDropdown) {
                                    return (
                                        <div key="services-mobile">
                                            <div
                                                className="layout-mobile-dropdown-trigger"
                                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                            >
                                                <FiBriefcase size={16} />
                                                Services
                                                <FiChevronDown className={`layout-dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`} size={16} />
                                            </div>
                                            {servicesDropdownOpen && (
                                                <div className="layout-mobile-dropdown-inner">
                                                    {serviceItems.map((service) => (
                                                        <Link
                                                            key={service.path}
                                                            to={service.path}
                                                            className={`layout-mobile-dropdown-link ${isActive(service.path) ? 'active' : ''}`}
                                                            onClick={() => { setMobileMenuOpen(false); setServicesDropdownOpen(false); }}
                                                        >
                                                            {service.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`layout-mobile-link ${isActive(item.path) ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon size={16} />
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <Link
                                to="/contact"
                                className="layout-mobile-cta"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            <main className="layout-main">{children}</main>
            <ChatWidget />

            <footer className="layout-footer">
                <div className="container">
                    <div className="layout-footer-grid">
                        <div>
                            <div className="layout-footer-logo">
                                <LogoIcon />
                                <div className="layout-logo-text">
                                    <span className="layout-logo-title">Tekynerds</span>
                                    <span className="layout-logo-tagline">nerds of tech</span>
                                </div>
                            </div>
                            <p className="layout-footer-desc">
                                We are a premier web development agency specializing in creating cutting-edge digital solutions that drive business growth. Our expert team combines innovative technology with strategic design to deliver exceptional results.
                            </p>
                        </div>
                        <div>
                            <h3 className="layout-footer-title">Company</h3>
                            <ul className="layout-footer-links">
                                {['Home', 'About', 'Blog', 'Growth', 'Pricing', 'Contact'].map((label, i) => (
                                    <li key={i}>
                                        <Link to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="layout-footer-title">Services</h3>
                            <ul className="layout-footer-links">
                                <li><Link to="/services/web-design">Website Design</Link></li>
                                <li><Link to="/services/web-development">Web Development</Link></li>
                                <li><Link to="/services/inventory-management">Inventory Management</Link></li>
                                <li><Link to="/services/cloud-services">Cloud Services</Link></li>
                                <li><Link to="/services/mobile-applications">Mobile Applications</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="layout-footer-title">Get in Touch</h3>
                            <p className="layout-footer-desc" style={{ marginBottom: '0.5rem' }}>hello@tekynerds.com</p>
                            <p className="layout-footer-desc" style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '1rem' }}>India, USA, Canada, Germany, Australia, Switzerland, Ireland, Europe</p>
                            <div className="layout-footer-social">
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                                <a href="#">Facebook</a>
                                <a href="#">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="layout-footer-bottom">
                        <p className="layout-footer-copyright">© Copyright 2024 Tekynerds. All Rights Reserved.</p>
                        <div className="layout-footer-legal">
                            <Link to="/terms">Terms</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/cancellation">Cancellation</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
