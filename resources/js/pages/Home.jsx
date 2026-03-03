import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FiArrowRight, FiZap, FiCheckCircle, FiGlobe, FiSmartphone, FiCode,
    FiShield, FiImage, FiPackage, FiCloud, FiShoppingBag, FiTablet, FiMessageSquare, FiTrendingUp,
} from 'react-icons/fi';
import './Home.css';

import SEO from '../components/SEO';

const Home = () => {
    const stats = [
        { icon: FiZap, number: '2', label: 'Years Experience', suffix: '+ Years' },
        { icon: FiCheckCircle, number: '100', label: 'Project Delivery', suffix: '%' },
        { icon: FiGlobe, number: '3', label: 'Countries Served', suffix: '+' },
        { icon: FiSmartphone, number: '10', label: 'Apps Developed', suffix: '+' },
    ];

    const services = [
        { title: 'Web Design', path: '/services/web-design', icon: FiImage, description: 'Creating stunning, user-friendly websites that captivate your audience.' },
        { title: 'Web Development', path: '/services/web-development', icon: FiCode, description: 'Building robust, scalable web applications using cutting-edge technologies.' },
        { title: 'Mobile App', path: '/services/mobile-applications', icon: FiTablet, description: 'Native and cross-platform mobile apps that deliver exceptional experiences.' },
        { title: 'Inventory Management', path: '/services/inventory-management', icon: FiPackage, description: 'Streamlining your inventory operations with intelligent management systems.' },
        { title: 'Cloud Solutions', path: '/services/cloud-services', icon: FiCloud, description: 'Scalable cloud infrastructure and services to power your business growth.' },
        { title: 'Digital Marketing', path: '/services/digital-marketing', icon: FiShoppingBag, description: 'Boosting your online presence with strategic digital marketing campaigns.' },
    ];

    const whyChooseUs = [
        { icon: FiCheckCircle, title: '100% Delivery', description: 'We deliver on time with quality that exceeds expectations.' },
        { icon: FiShield, title: 'Secure & Reliable', description: 'Enterprise-grade security and 99% uptime for your solutions.' },
        { icon: FiTrendingUp, title: 'Growth-Focused', description: 'Solutions designed to scale with your business needs.' },
        { icon: FiMessageSquare, title: 'Clear Communication', description: 'Transparent process with regular updates via Meet, chat, and email.' },
    ];

    const processSteps = [
        { number: '01', title: 'Discovery & Planning', description: 'Align end-user persona with business needs. Document everything without assumption.' },
        { number: '02', title: 'Design & Development', description: 'Design UI from approved wireframes. Craft clean, optimized code structure.' },
        { number: '03', title: 'Delivery & Support', description: 'Deploy, test, and deliver. Ongoing support to ensure success.' },
    ];

    const industries = [
        { name: 'Education', desc: 'Revolutionize e-Learning with top-tier Edtech solutions.' },
        { name: 'Healthcare', desc: 'Transform healthcare delivery with innovative digital solutions.' },
        { name: 'Software & IT', desc: 'Empower your IT infrastructure with cutting-edge software solutions.' },
        { name: 'Real Estate', desc: 'Modernize real estate operations with digital platforms.' },
        { name: 'Finance', desc: 'Secure financial technology solutions for modern banking.' },
        { name: 'Logistics', desc: 'Optimize supply chain and logistics operations.' },
        { name: 'Media & Entertainment', desc: 'Create engaging digital experiences for audiences.' },
        { name: 'Hospitality', desc: 'Enhance guest experiences with hospitality technology.' },
    ];

    const techStack = ['React', 'Vue.js', 'Node.js', 'Next.js', 'TypeScript', 'Python', 'Laravel', 'MongoDB', 'AWS', 'React Native', 'Flutter', 'Docker'];

    const testimonials = [
        { name: 'Florian Baumann', location: 'Switzerland', quote: 'The website they built is a game-changer for our business. Thank you for your hard work.' },
        { name: 'Micheal Gough', location: 'USA', quote: "The website is beautiful! It's exactly what we needed, and the process was smooth and efficient." },
        { name: 'Paul Wagner', location: 'Germany', quote: "I couldn't be happier with Tekynerds' service. They delivered on time, and their creativity shone through with a fantastic user interface." },
        { name: 'Cian Doyle', location: 'Ireland', quote: "I am incredibly pleased with the results we got from the web development team. They really know their stuff!" },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    return (
        <div className="home-page">
            <SEO
                title="Tekynerds - Web Development & Digital Services"
                description="Tekynerds builds custom websites, mobile apps, and digital marketing solutions to drive growth for forward-thinking brands."
            />
            {/* Hero */}
            <section className="home-hero">
                <div className="container">
                    <div className="home-hero-content">
                        <p className="home-hero-badge">Innovation · Strategy First</p>
                        <h1 className="home-hero-title">
                            Web Development, <span className="highlight">Software Solutions</span> & Digital Growth for Forward-Thinking Brands
                        </h1>
                        <p className="home-hero-desc">
                            Custom Websites, Scalable Apps, Modern UI/UX — Built for Performance & Growth.
                        </p>
                        <div className="home-hero-tags">
                            <span className="home-hero-tag">Web Development</span>
                            <span className="home-hero-tag">Conversion Optimization</span>
                            <span className="home-hero-tag">Performance Marketing</span>
                        </div>
                        <div className="home-hero-ctas">
                            <Link to="/contact" className="home-btn-primary">
                                Get a Free Consultation
                                <FiArrowRight size={16} />
                            </Link>
                            <Link to="/services" className="home-btn-secondary">
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="home-section home-section-white">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">Our Services</h2>
                        <p className="home-section-subtitle">Comprehensive digital solutions to transform your business</p>
                    </div>
                    <div className="home-services-grid">
                        {services.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <Link key={i} to={s.path} className="home-service-card">
                                    <div className="home-service-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="home-service-title">{s.title}</h3>
                                    <p className="home-service-desc">{s.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="home-section home-section-light">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">Our Experience in Numbers</h2>
                        <p className="home-section-subtitle">Our track record speaks for itself — delivering excellence across the globe.</p>
                    </div>
                    <div className="home-metrics-grid">
                        {stats.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div key={i} className="home-metric-card">
                                    <div className="home-metric-icon">
                                        <Icon size={20} />
                                    </div>
                                    <div className="home-metric-number">
                                        {s.number}<span className="suffix">{s.suffix}</span>
                                    </div>
                                    <p className="home-metric-label">{s.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="home-section home-section-white">
                <div className="container">
                    <div className="home-experience">
                        <h2 className="home-experience-title">Experience World-Class Agile Product Development</h2>
                        <p className="home-experience-text">
                            Harness digitized business solutions comprising web, Android, and iOS app solutions leveraging React, Vue.js, Node.js, and modern web technologies for your startup or enterprise.
                        </p>
                        <p className="home-experience-text">
                            Build and deploy thriving agile solutions that help you design, develop, and scale.
                        </p>
                        <Link to="/contact" className="home-btn-primary">Request a Quote</Link>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="home-section home-section-light">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">Industries We Serve</h2>
                        <p className="home-section-subtitle">We partner with businesses across various industries to deliver tailored digital solutions.</p>
                    </div>
                    <div className="home-industries-grid">
                        {industries.map((ind, i) => (
                            <div key={i} className="home-industry-card">
                                <h3 className="home-industry-name">{ind.name}</h3>
                                <p className="home-industry-desc">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="home-section home-section-white">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">Technologies We Work With</h2>
                        <p className="home-section-subtitle">We use the latest trending and reliable technologies to develop your project.</p>
                    </div>
                    <div className="home-tech-wrap">
                        {techStack.map((tech, i) => (
                            <span key={i} className="home-tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="home-section home-section-light">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">Why Choose Us</h2>
                        <p className="home-section-subtitle">
                            Tekynerds delivered a highly functional website with 99% uptime, timely deliveries, effective communication through Google Meet, chat, and email, all while maintaining reliability and efficiency.
                        </p>
                    </div>
                    <div className="home-why-grid">
                        {whyChooseUs.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="home-why-card">
                                    <div className="home-why-icon">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="home-why-title">{item.title}</h3>
                                    <p className="home-why-desc">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="home-section home-section-white">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">Our Process</h2>
                        <p className="home-section-subtitle">Guiding your project toward success, one step at a time</p>
                    </div>
                    <div className="home-process-grid">
                        {processSteps.map((step, i) => (
                            <div key={i} className="home-process-step">
                                <div className="home-process-num">{step.number}</div>
                                <h3 className="home-process-title">{step.title}</h3>
                                <p className="home-process-desc">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <Link to="/growth" className="home-process-link">Learn more about our process →</Link>
                </div>
            </section>

            {/* Testimonials */}
            <section className="home-section home-section-light">
                <div className="container">
                    <div className="home-section-header">
                        <h2 className="home-section-title">What Our Clients Say</h2>
                        <p className="home-section-subtitle">Trusted by businesses worldwide</p>
                    </div>
                    <div className="home-testimonial-wrap">
                        <div className="home-testimonial-card">
                            <FiMessageSquare className="home-testimonial-icon" />
                            <blockquote className="home-testimonial-quote">
                                "{testimonials[currentTestimonial].quote}"
                            </blockquote>
                            <div className="home-testimonial-author">
                                <div className="home-testimonial-avatar">
                                    {testimonials[currentTestimonial].name.charAt(0)}
                                </div>
                                <div>
                                    <p className="home-testimonial-name">{testimonials[currentTestimonial].name}</p>
                                    <p className="home-testimonial-location">{testimonials[currentTestimonial].location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-testimonial-dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`home-testimonial-dot ${i === currentTestimonial ? 'active' : ''}`}
                                    aria-label={`View testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="home-section home-section-dark">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="home-cta-title">Let's Craft Your Next Digital Story</h2>
                    <p className="home-cta-desc">
                        Ready to transform your business with cutting-edge digital solutions? Get in touch with us today.
                    </p>
                    <div className="home-cta-btns">
                        <Link to="/contact" className="home-cta-btn-primary">Get a Quote</Link>
                        <Link to="/contact" className="home-cta-btn-outline">Start Your Project</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
