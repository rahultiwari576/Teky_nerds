import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiZap, FiUsers, FiSmartphone, FiMonitor, FiGlobe, FiCheckCircle, FiCode, FiLayers, FiTrendingUp, FiShield, FiMessageSquare, FiPackage, FiCloud, FiImage, FiShoppingBag, FiTablet, FiBox, FiServer } from 'react-icons/fi';
import './Home.css';

const Home = () => {
    const stats = [
        { icon: FiZap, number: '2+', label: 'Years Experience', suffix: ' Years' },
        { icon: FiCheckCircle, number: '100%', label: 'Project Delivery', suffix: '%' },
        { icon: FiGlobe, number: '3+', label: 'Countries Served', suffix: '+' },
        { icon: FiSmartphone, number: '10+', label: 'Apps Developed', suffix: '+' },
    ];

    const services = [
        { title: 'Web Design', path: '/services/web-design', icon: FiImage, description: 'CREATING STUNNING, USER-FRIENDLY WEBSITES THAT CAPTIVATE YOUR AUDIENCE.' },
        { title: 'Web Development', path: '/services/web-development', icon: FiCode, description: 'BUILDING ROBUST, SCALABLE WEB APPLICATIONS USING CUTTING-EDGE TECHNOLOGIES.' },
        { title: 'Mobile App', path: '/services/mobile-applications', icon: FiTablet, description: 'NATIVE AND CROSS-PLATFORM MOBILE APPS THAT DELIVER EXCEPTIONAL EXPERIENCES.' },
        { title: 'Inventory Management', path: '/services/inventory-management', icon: FiPackage, description: 'STREAMLINING YOUR INVENTORY OPERATIONS WITH INTELLIGENT MANAGEMENT SYSTEMS.' },
        { title: 'Cloud Solutions', path: '/services/cloud-services', icon: FiCloud, description: 'SCALABLE CLOUD INFRASTRUCTURE AND SERVICES TO POWER YOUR BUSINESS GROWTH.' },
        { title: 'Digital Marketing', path: '/services/digital-marketing', icon: FiShoppingBag, description: 'BOOSTING YOUR ONLINE PRESENCE WITH STRATEGIC DIGITAL MARKETING CAMPAIGNS.' },
    ];

    const industries = [
        { id: 'education', name: 'Education', description: 'Revolutionize e-Learning with Top-Tier Edtech Solutions. We provide top-tier eLearning software solutions that truly resonate with forward-thinking Edtech companies. Our goal is to enhance user experiences and achieve important educational objectives.' },
        { id: 'healthcare', name: 'Healthcare', description: 'Transform healthcare delivery with innovative digital solutions. We develop secure, compliant healthcare applications that improve patient care, streamline operations, and enhance medical service delivery.' },
        { id: 'software', name: 'Software & IT', description: 'Empower your IT infrastructure with cutting-edge software solutions. We build scalable, robust applications that drive digital transformation and operational efficiency for tech companies.' },
        { id: 'real-estate', name: 'Real Estate', description: 'Modernize real estate operations with digital platforms. We create property management systems, virtual tour applications, and real estate portals that connect buyers, sellers, and agents seamlessly.' },
        { id: 'finance', name: 'Finance', description: 'Secure financial technology solutions for modern banking. We develop fintech applications with advanced security, compliance features, and seamless user experiences for financial institutions.' },
        { id: 'logistics', name: 'Logistics', description: 'Optimize supply chain and logistics operations. We build comprehensive logistics management systems that track shipments, manage inventory, and streamline delivery processes.' },
        { id: 'media', name: 'Media & Entertainment', description: 'Create engaging digital experiences for audiences. We develop streaming platforms, content management systems, and interactive media applications that captivate and entertain.' },
        { id: 'hospitality', name: 'Hospitality', description: 'Enhance guest experiences with hospitality technology. We create booking systems, hotel management platforms, and customer service applications that elevate the hospitality industry.' },
    ];

    const [selectedIndustry, setSelectedIndustry] = useState('education');
    const [activeTechTab, setActiveTechTab] = useState('frontend');

    const testimonials = [
        { name: 'Florian Baumann', location: 'Switzerland', quote: 'The website they built is a game-changer for our business. Thank you for your hard work' },
        { name: 'Micheal Gough', location: 'USA', quote: 'The website is beautiful! It\'s exactly what we needed, and the process was smooth and efficient.' },
        { name: 'Paul Wagner', location: 'Germany', quote: 'I couldn\'t be happier with Tekynerds\' service. They delivered on time, and their creativity shone through with a fantastic user interface.' },
        { name: 'Cian Doyle', location: 'Ireland', quote: 'I am incredibly pleased with the results we got from the web development team. They really know their stuff!' },
        { name: 'Patrick Byrne', location: 'Ireland', quote: 'I\'ve worked with a lot of web developers, but this experience was by far the best. Highly recommend!' },
        { name: 'Lena Meyer', location: 'Germany', quote: 'The team at this web development company is not only skilled but also very understanding of our needs. Super happy' },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <span className="badge-new">🚀 Innovation</span>
                                <span className="badge-company">Strategy First</span>
                            </div>
                            <h1 className="hero-title">
                                Elevate Your Brand with <span className="highlight">Strategic</span> Web Development & Marketing
                            </h1>
                            <p className="hero-description">
                                We craft high-performance websites and implement data-driven marketing strategies that drive growth. From responsive web development to conversion-focused digital campaigns, we transform your online presence into a powerful business asset.
                            </p>
                            <div className="hero-features">
                                <div className="hero-feature-item">
                                    <span className="feature-icon">💻</span>
                                    <span>Web Development</span>
                                </div>
                                <div className="hero-feature-item">
                                    <span className="feature-icon">🎯</span>
                                    <span>Conversion Optimization</span>
                                </div>
                                <div className="hero-feature-item">
                                    <span className="feature-icon">⚡</span>
                                    <span>Performance Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="laptop-mockup">
                                <div className="laptop-screen">
                                    <div className="screen-content">
                                        <div className="dashboard-header">
                                            <div className="dashboard-dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className="dashboard-title">Tekynerds Dashboard</div>
                                        </div>
                                        <div className="product-grid">
                                            <div className="product-card">
                                                <FiCode className="card-icon" />
                                                <div className="card-content">
                                                    <div className="card-title">Web Dev</div>
                                                    <div className="card-stats">78%</div>
                                                </div>
                                            </div>
                                            <div className="product-card">
                                                <FiLayers className="card-icon" />
                                                <div className="card-content">
                                                    <div className="card-title">Design</div>
                                                    <div className="card-stats">82%</div>
                                                </div>
                                            </div>
                                            <div className="product-card">
                                                <FiTrendingUp className="card-icon" />
                                                <div className="card-content">
                                                    <div className="card-title">Growth</div>
                                                    <div className="card-stats">36%</div>
                                                </div>
                                            </div>
                                            <div className="product-card">
                                                <FiShield className="card-icon" />
                                                <div className="card-content">
                                                    <div className="card-title">Security</div>
                                                    <div className="card-stats">100%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-cta-group">
                                <Link to="/contact" className="cta-button primary">
                                    Get a Quote
                                </Link>
                                <Link to="/contact" className="cta-button secondary">
                                    Start Your Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="services-header">
                        <h2 className="services-title">
                            OUR <span className="highlight">SERVICES</span>
                        </h2>
                        <p className="services-subtitle">
                            Comprehensive digital solutions to transform your business
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Link key={index} to={service.path} className="service-card">
                                    <div className="service-icon-wrapper">
                                        <Icon className="service-icon" />
                                    </div>
                                    <h3 className="service-card-title">{service.title.toUpperCase()}</h3>
                                    <p className="service-card-description">{service.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Experience / Metrics Section */}
            <section className="metrics-section">
                <div className="container">
                    <h2 className="section-title">
                        OUR <span className="highlight">EXPERIENCE</span> IN NUMBERS
                    </h2>
                    <p className="section-subtitle">
                        Our track record speaks for itself - delivering excellence across the globe.
                    </p>
                    <div className="metrics-grid">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="metric-card">
                                    <div className="metric-icon">
                                        <Icon />
                                    </div>
                                    <h3 className="metric-name">{stat.label}</h3>
                                    <div className="metric-number">
                                        {stat.number}
                                        {stat.suffix && <span className="metric-suffix">{stat.suffix}</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience-section">
                <div className="container">
                    <div className="experience-content">
                        <div className="experience-stats">
                            <h2 className="section-title">
                                EXPERIENCE <span className="highlight">WORLD-CLASS AGILE</span> PRODUCT DEVELOPMENT
                            </h2>
                            <p className="experience-text">
                                Harness digitized business solutions comprising web, Android, and iOS app solutions 
                                leveraging React, Vue.js, Node.js, and modern web technologies for your startup or enterprise.
                            </p>
                            <p className="experience-text">
                                Build and deploy thriving agile solutions that help you design, develop, and scale.
                            </p>
                            <h3 className="cta-text">LET'S START A NEW PROJECT TOGETHER</h3>
                            <Link to="/contact" className="quote-button">
                                REQUEST A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served Section */}
            <section className="industries-section">
                <div className="container">
                    <h2 className="section-title">
                        INDUSTRIES <span className="highlight">WE</span> SERVE
                    </h2>
                    <p className="section-subtitle">
                        We partner with businesses across various industries to deliver tailored digital solutions.
                    </p>
                    <div className="industries-grid">
                        {industries.map((industry) => (
                            <div 
                                key={industry.id}
                                className="industry-card"
                                onMouseEnter={() => setSelectedIndustry(industry.id)}
                            >
                                <h3 className="industry-name">{industry.name}</h3>
                                <p className="industry-tagline">{industry.description.split('.')[0]}.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="technologies-section">
                <div className="container">
                    <h2 className="section-title">
                        TECHNOLOGIES <span className="highlight">WE WORK</span> WITH
                    </h2>
                    <p className="section-subtitle">
                        We use the latest trending and reliable technologies to develop your project.
                    </p>
                    <div className="tech-categories">
                        <div 
                            className={`tech-category ${activeTechTab === 'frontend' ? 'active' : ''}`}
                            onClick={() => setActiveTechTab('frontend')}
                        >
                            FRONT END
                        </div>
                        <div 
                            className={`tech-category ${activeTechTab === 'backend' ? 'active' : ''}`}
                            onClick={() => setActiveTechTab('backend')}
                        >
                            BACK END
                        </div>
                        <div 
                            className={`tech-category ${activeTechTab === 'mobile' ? 'active' : ''}`}
                            onClick={() => setActiveTechTab('mobile')}
                        >
                            MOBILE APPLICATION
                        </div>
                        <div 
                            className={`tech-category ${activeTechTab === 'cloud' ? 'active' : ''}`}
                            onClick={() => setActiveTechTab('cloud')}
                        >
                            CLOUD SERVICES
                        </div>
                    </div>
                    <div className="tech-logos">
                        {activeTechTab === 'frontend' && (
                            <>
                                <div className="tech-logo">React</div>
                                <div className="tech-logo">Vue.js</div>
                                <div className="tech-logo">Angular</div>
                                <div className="tech-logo">Next.js</div>
                                <div className="tech-logo">TypeScript</div>
                                <div className="tech-logo">JavaScript</div>
                                <div className="tech-logo">HTML5</div>
                                <div className="tech-logo">CSS3</div>
                                <div className="tech-logo">Tailwind CSS</div>
                                <div className="tech-logo">SASS</div>
                            </>
                        )}
                        {activeTechTab === 'backend' && (
                            <>
                                <div className="tech-logo">Node.js</div>
                                <div className="tech-logo">Express.js</div>
                                <div className="tech-logo">Laravel</div>
                                <div className="tech-logo">PHP</div>
                                <div className="tech-logo">Python</div>
                                <div className="tech-logo">Django</div>
                                <div className="tech-logo">MongoDB</div>
                                <div className="tech-logo">MySQL</div>
                                <div className="tech-logo">PostgreSQL</div>
                            </>
                        )}
                        {activeTechTab === 'mobile' && (
                            <>
                                <div className="tech-logo">React Native</div>
                                <div className="tech-logo">Flutter</div>
                                <div className="tech-logo">Android</div>
                                <div className="tech-logo">iOS</div>
                                <div className="tech-logo">Firebase</div>
                            </>
                        )}
                        {activeTechTab === 'cloud' && (
                            <>
                                <div className="tech-logo">AWS</div>
                                <div className="tech-logo">Azure</div>
                                <div className="tech-logo">Google Cloud</div>
                                <div className="tech-logo">Docker</div>
                                <div className="tech-logo">Heroku</div>
                                <div className="tech-logo">Netlify</div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">
                        OUR <span className="highlight">CLIENTS</span>
                    </h2>
                    <p className="section-subtitle">
                        Tekynerds delivered a highly functional website with 99% uptime, timely deliveries, effective communication through Google Meet, chat, and email, all while maintaining reliability and efficiency.
                    </p>
                    <div className="testimonials-carousel">
                        <button 
                            className="carousel-btn prev"
                            onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                        >
                            ← Previous
                        </button>
                        <div className="testimonials-container">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
                                >
                                    <FiMessageSquare className="quote-icon" />
                                    <blockquote className="testimonial-quote">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="author-info">
                                            <div className="author-name">{testimonial.name}</div>
                                            <div className="author-location">{testimonial.location}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button 
                            className="carousel-btn next"
                            onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            {/* <section className="customer-reviews-section">
                <div className="container">
                    <h2 className="reviews-section-title">
                        CUSTOMER <span className="highlight">REVIEWS</span>
                    </h2>
                    <p className="reviews-section-subtitle">
                        See what our clients say about working with Tekynerds
                    </p>
                    <div className="reviews-grid">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <div key={index} className="review-card">
                                <div className="review-stars">★★★★★</div>
                                <blockquote className="review-quote">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="review-author">
                                    <div className="review-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="review-author-info">
                                        <div className="review-author-name">{testimonial.name}</div>
                                        <div className="review-author-location">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-main-title">Let's Craft Your Next Digital Story</h2>
                    <p className="cta-description">
                        Ready to transform your business with cutting-edge digital solutions? Get in touch with us today.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-button primary large">
                            Get a Quote
                        </Link>
                        <Link to="/contact" className="cta-button secondary large">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

