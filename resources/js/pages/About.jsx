import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiTarget, FiEye, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import './About.css';

import SEO from '../components/SEO';

const About = () => {
    const timeline = [
        { year: '2022', title: 'Company Founded', description: 'Tekynerds was established with a vision to transform businesses through innovative web solutions.' },
        { year: '2023', title: 'First Major Client', description: 'Secured our first enterprise client and delivered a groundbreaking web application.' },
        { year: '2024', title: 'Global Expansion', description: 'Expanded our services to serve clients across 15+ countries worldwide.' },
        { year: '2024', title: 'Award Recognition', description: 'Received recognition for excellence in web development and digital innovation.' },
    ];

    const team = [
        { name: 'Rahul Kumar', role: 'CEO & Founder', image: '/Rahul Tiwari.jpeg', bio: 'Visionary leader with 5+ years of experience in web development and specializing in cutting-edge web technologies.' },
        { name: 'Mayukh Moitra', role: 'CTO', image: '', bio: 'Tech expert specializing in cutting-edge web technologies.' },
        { name: 'Sunil Bind', role: 'Web Site Manager', image: '', bio: 'Full-stack developer passionate about building scalable solutions.' },
        { name: 'Sachin', role: 'Digital Expert', image: '', bio: 'Expertise in SEO, Social Media, Content. 5+ years experience, data-driven approach with results-focused delivery.' },
    ];

    const achievements = [
        { number: '100+', label: 'Projects Completed', icon: FiTrendingUp },
        { number: '50+', label: 'Happy Clients', icon: FiUsers },
        { number: '15+', label: 'Countries Served', icon: FiAward },
        { number: '5+', label: 'Years Experience', icon: FiCalendar },
    ];

    return (
        <div className="about-page">
            <SEO
                title="About Us - Tekynerds"
                description="Learn about Tekynerds — our mission, team, achievements and the story behind our digital solutions agency."
            />
            <section className="about-hero">
                <div className="container">
                    <nav className="about-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span style={{ color: '#111827', fontWeight: 500 }}>About</span>
                    </nav>
                    <div className="about-hero-grid">
                        <h1 className="about-hero-title">
                            We Build Bridges Between <span className="highlight">Companies and Customers</span>
                        </h1>
                        <p className="about-hero-desc">
                            To Build Software That Gives Customer-Facing Teams At Small And Medium Sized Business The Ability To Create Fruitful And Enduring Relationships With Customers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section about-section-light">
                <div className="container">
                    <div className="about-mission-grid">
                        <div className="about-mission-card">
                            <div className="about-mission-icon">
                                <FiTarget size={24} />
                            </div>
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to provide top-tier digital solutions that truly resonate with forward-thinking businesses. We're dedicated to enhancing user experiences and achieving important business objectives through innovative technology and creative design.
                            </p>
                        </div>
                        <div className="about-mission-card">
                            <div className="about-mission-icon">
                                <FiEye size={24} />
                            </div>
                            <h2>Our Vision</h2>
                            <p>
                                To become a globally recognized leader in web development, known for our innovative solutions, exceptional service quality, and commitment to helping businesses achieve their digital transformation goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section about-section-white">
                <div className="container">
                    <h2 className="about-section-title">Our Story</h2>
                    <div className="about-timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="about-timeline-item">
                                <div className="about-timeline-year">{item.year}</div>
                                <div className="about-timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-section about-section-light">
                <div className="container">
                    <div className="about-who-grid">
                        <h2 className="about-who-title">Together We Are Strong</h2>
                        <div>
                            <h3 className="about-who-subtitle">United by a shared vision of excellence</h3>
                            <p className="about-who-text">
                                We collaborate to deliver transformative digital solutions that propel businesses forward.
                            </p>
                            <p className="about-who-text">
                                Tekynerds, founded by Rahul Kumar in 2022, is a premier web development agency specializing in creating cutting-edge digital solutions that drive business growth. Our expert team combines innovative technology with strategic design to deliver exceptional results that exceed client expectations. Based in India with a global reach, we collaborate with businesses worldwide to transform ideas into powerful digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section about-section-white">
                <div className="container">
                    <h2 className="about-section-title">Meet Our Team</h2>
                    <div className="about-team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="about-team-card">
                                <div className="about-team-avatar">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} />
                                    ) : (
                                        <FiUsers size={48} style={{ color: '#fff' }} />
                                    )}
                                </div>
                                <h3 className="about-team-name">{member.name}</h3>
                                <p className="about-team-role">{member.role}</p>
                                <p className="about-team-bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-section about-section-light">
                <div className="container">
                    <h2 className="about-section-title">Our Achievements</h2>
                    <div className="about-achievements-grid">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <div key={index} className="about-achievement-card">
                                    <div className="about-achievement-icon">
                                        <Icon size={24} />
                                    </div>
                                    <div className="about-achievement-number">{achievement.number}</div>
                                    <p className="about-achievement-label">{achievement.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="about-section about-section-dark">
                <div className="container">
                    <h2 className="about-cta-title">Ready to Start Your Project?</h2>
                    <Link to="/contact" className="about-cta-btn">Get In Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
