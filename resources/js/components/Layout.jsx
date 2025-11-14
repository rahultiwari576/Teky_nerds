import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiTrendingUp, FiMail, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import './Layout.css';

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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

    const serviceItems = [
        { path: '/services/web-design', label: 'Web Design' },
        { path: '/services/web-development', label: 'Web Development' },
        { path: '/services/mobile-applications', label: 'Mobile App' },
        { path: '/services/inventory-management', label: 'Inventory Management' },
        { path: '/services/cloud-services', label: 'Cloud Solutions' },
        { path: '/services/digital-marketing', label: 'Digital Marketing' },
    ];

    const navItems = [
        { path: '/', label: 'HOME', icon: FiHome },
        { path: '/about', label: 'ABOUT', icon: FiUser },
        { path: '/blog', label: 'BLOGS', icon: FiFileText },
        { path: '/growth', label: 'GROWTH', icon: FiTrendingUp },
        { path: '/contact', label: 'CONTACTS', icon: FiMail },
    ];

    return (
        <div className="layout">
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="10" fill="url(#logoGradient)"/>
                                <path d="M12 20L18 14L20 16L28 8L30 10L20 20L18 18L12 24V20Z" fill="white"/>
                                <path d="M20 22L28 14L30 16L32 14L30 12L20 22Z" fill="white" opacity="0.8"/>
                                <defs>
                                    <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#667eea"/>
                                        <stop offset="1" stopColor="#764ba2"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="logo-text-wrapper">
                            <span className="logo-text">TEKYNERDS</span>
                            <span className="logo-tagline">nerds of tech</span>
                        </div>
                    </Link>
                    <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <React.Fragment key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon className="nav-icon" />
                                        {item.label}
                                    </Link>
                                    {index === 1 && (
                                        <div 
                                            className="nav-dropdown"
                                            onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
                                            onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
                                        >
                                            <div 
                                                className={`nav-link dropdown-trigger ${isActive('/services') ? 'active' : ''}`}
                                                onClick={() => isMobile && setServicesDropdownOpen(!servicesDropdownOpen)}
                                            >
                                                <FiBriefcase className="nav-icon" />
                                                SERVICES
                                                <FiChevronDown className={`dropdown-arrow ${servicesDropdownOpen ? 'rotated' : ''}`} />
                                            </div>
                                            {servicesDropdownOpen && (
                                                <div className="dropdown-menu">
                                                    {serviceItems.map((service) => (
                                                        <Link
                                                            key={service.path}
                                                            to={service.path}
                                                            className={`dropdown-item ${isActive(service.path) ? 'active' : ''}`}
                                                            onClick={() => {
                                                                setMobileMenuOpen(false);
                                                                setServicesDropdownOpen(false);
                                                            }}
                                                        >
                                                            {service.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </nav>
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </header>
            <main className="main-content">{children}</main>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-logo">
                                <div className="logo-icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="10" fill="url(#footerLogoGradient)"/>
                                        <path d="M12 20L18 14L20 16L28 8L30 10L20 20L18 18L12 24V20Z" fill="white"/>
                                        <path d="M20 22L28 14L30 16L32 14L30 12L20 22Z" fill="white" opacity="0.8"/>
                                        <defs>
                                            <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#667eea"/>
                                                <stop offset="1" stopColor="#764ba2"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="footer-logo-text">
                                    <span className="logo-text">TEKYNERDS</span>
                                    <span className="logo-tagline">nerds of tech</span>
                                </div>
                            </div>
                            <p className="footer-description">
                                We are a premier web development agency specializing in creating cutting-edge digital solutions that drive business growth. Our expert team combines innovative technology with strategic design to deliver exceptional results that exceed client expectations.
                            </p>
                        </div>
                        <div className="footer-section">
                            <h3 className="footer-title">COMPANY</h3>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blogs</Link></li>
                                <li><Link to="/growth">Growth</Link></li>
                                <li><Link to="/contact">Contacts</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3 className="footer-title">SERVICES</h3>
                            <ul className="footer-links">
                                <li><Link to="/services/web-design">Website Design</Link></li>
                                <li><Link to="/services/web-development">Web Development</Link></li>
                                <li><Link to="/services/inventory-management">Inventory Management</Link></li>
                                <li><Link to="/services/cloud-services">Cloud Services</Link></li>
                                <li><Link to="/services/mobile-applications">Mobile Applications</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3 className="footer-title">GET IN TOUCH</h3>
                            <p className="footer-contact">
                                <span>📧</span> hello@tekynerds.com
                            </p>
                            <p className="footer-locations">
                                INDIA, USA, Canada, Germany, Australia, Switzerland, Ireland
                            </p>
                            <div className="footer-social">
                                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                                <a href="#" aria-label="Twitter">Twitter</a>
                                <a href="#" aria-label="Facebook">Facebook</a>
                                <a href="#" aria-label="Instagram">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; Copyright 2024 Tekynerds. All Rights Reserved.</p>
                        <div className="footer-legal">
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cancellation and Refund</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

