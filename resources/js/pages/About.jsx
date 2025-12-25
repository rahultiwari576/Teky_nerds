import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiTarget, FiEye, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import './About.css';

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
        { name: 'Sachin', role: 'Digital Expert', image: '', bio: 'expertise (SEO, Social Media, Content), showcases results with metrics (e.g., 5+ years, 200% growth), mentions unique value (data-driven, storytelling), and includes a call-to-action (CTA) to connect or view work, all while maintaining a professional, results-focused tone' },
    ];

    const achievements = [
        { number: '100+', label: 'Projects Completed', icon: FiTrendingUp },
        { number: '50+', label: 'Happy Clients', icon: FiUsers },
        { number: '15+', label: 'Countries Served', icon: FiAward },
        { number: '5+', label: 'Years Experience', icon: FiCalendar },
    ];

    return (
        <div className="about-page">
            {/* Hero Banner Section */}
            <section className="about-hero">
                <div className="hero-background-elements">
                    <div className="bg-element">grow here</div>
                    <div className="bg-element">person</div>
                    <div className="bg-element">you can</div>
                    <div className="bg-element">target market</div>
                    <div className="bg-element">more</div>
                    <div className="bg-element">Platform</div>
                    <div className="bg-element social">f</div>
                </div>
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/" className="breadcrumb-link">Home</Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-active">About</span>
                    </div>
                    <div className="hero-content">
                        <div className="hero-left">
                            <h1 className="hero-title">
                                WE BUILD BRIDGES BETWEEN <span className="highlight">COMPANIES AND CUSTOMERS</span>
                            </h1>
                        </div>
                        <div className="hero-right">
                            <p className="hero-description">
                                To Build Software That Gives Customer-Facing Teams At Small And Medium Sized Business The Ability To Create Fruitful And Enduring Relationships With Customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <div className="card-icon-wrapper">
                                <FiTarget className="card-icon" />
                            </div>
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to provide top-tier digital solutions that truly resonate with forward-thinking
                                businesses. We're dedicated to enhancing user experiences and achieving important business
                                objectives through innovative technology and creative design.
                            </p>
                        </div>
                        <div className="vision-card">
                            <div className="card-icon-wrapper">
                                <FiEye className="card-icon" />
                            </div>
                            <h2>Our Vision</h2>
                            <p>
                                To become a globally recognized leader in web development, known for our innovative solutions,
                                exceptional service quality, and commitment to helping businesses achieve their digital transformation goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Timeline */}
            <section className="timeline-section">
                <div className="container">
                    <h2 className="section-title">Our Story</h2>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="who-we-are-section">
                <div className="container">
                    <div className="who-we-are-header">
                        <div className="section-left">
                            <h2 className="section-title-large">Together We Are Strong</h2>
                        </div>
                        <div className="section-right">
                            <h3 className="section-subtitle">
                                United by a shared vision of excellence, we collaborate to deliver transformative digital solutions that propel businesses forward.
                            </h3>
                            <p>
                                Tekynerds, founded by Rahul Kumar in 2022, is a premier web development agency specializing in creating cutting-edge digital solutions that drive business growth. Our expert team combines innovative technology with strategic design to deliver exceptional results that exceed client expectations. Based in India with a global reach, we collaborate with businesses worldwide to transform ideas into powerful digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-image-wrapper">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="team-image" />
                                    ) : (
                                        <div className="team-placeholder">
                                            <FiUsers className="placeholder-icon" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements & Numbers Section */}
            <section className="achievements-section">
                <div className="container">
                    <h2 className="section-title">Our Achievements</h2>
                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <div key={index} className="achievement-card">
                                    <div className="achievement-icon-wrapper">
                                        <Icon className="achievement-icon" />
                                    </div>
                                    <div className="achievement-number">{achievement.number}</div>
                                    <div className="achievement-label">{achievement.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <h2>Ready to Start Your Project?</h2>
                    <Link to="/contact" className="cta-button">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;

