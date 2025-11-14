import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const heroRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        const canvas = canvasRef.current;
        
        if (!hero || !canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];
        const particleCount = 50;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        // Mouse interaction
        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle, i) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Mouse interaction
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    particle.x -= dx * 0.01;
                    particle.y -= dy * 0.01;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
                ctx.fill();

                // Draw connections
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="about-page">
            <section className="about-hero" ref={heroRef}>
                <canvas ref={canvasRef} className="hero-canvas"></canvas>
                <div className="hero-3d-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <div className="container hero-content-wrapper">
                    <div className="hero-text-content">
                        <h1 className="page-title">
                            ABOUT <span className="highlight">TEKYNERDS</span>
                        </h1>
                    <p className="page-subtitle">
                        We're passionate about creating digital solutions that make a difference.
                    </p>
                    </div>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="who-we-are-section">
                        <div className="who-we-are-header">
                            <h2 className="section-title">Who We Are</h2>
                            <div className="title-underline"></div>
                        </div>
                        <div className="who-we-are-content">
                            <div className="who-we-are-text">
                                <p className="lead-text">
                                    Tekynerds is a dynamic and innovative web development company with a strong focus on 
                            delivering high-quality websites that make a significant impact on our clients' businesses. 
                                </p>
                                <p>
                            Our team is passionate about leveraging the latest technologies and design trends to create 
                                    bespoke web solutions that not only meet but exceed our clients' expectations. We combine 
                                    technical expertise with creative vision to transform ideas into powerful digital experiences.
                                </p>
                                <p>
                                    With a commitment to excellence and innovation, we've helped numerous businesses establish 
                                    their online presence and achieve their digital goals. Our approach is collaborative, 
                                    transparent, and results-driven.
                                </p>
                            </div>
                            <div className="who-we-are-cards">
                                <div className="glass-card">
                                    <div className="card-icon">🚀</div>
                                    <h3>Innovation First</h3>
                                    <p>We stay ahead of the curve with cutting-edge technologies and modern design practices.</p>
                                </div>
                                <div className="glass-card">
                                    <div className="card-icon">✨</div>
                                    <h3>Quality Focus</h3>
                                    <p>Every project undergoes rigorous quality assurance to ensure flawless delivery.</p>
                                </div>
                                <div className="glass-card">
                                    <div className="card-icon">🌍</div>
                                    <h3>Global Reach</h3>
                                    <p>Serving clients worldwide with scalable solutions that grow with their business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide top-tier digital solutions that truly resonate with forward-thinking 
                            businesses. We're dedicated to enhancing user experiences and achieving important business 
                            objectives through innovative technology and creative design.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Why Choose Us</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Expert Team</h3>
                                <p>Our talented squad brings years of experience and expertise to every project.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Quality Assurance</h3>
                                <p>100% project delivery rate with rigorous testing and quality checks.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Client Satisfaction</h3>
                                <p>100% client satisfaction rate with dedicated support and communication.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Global Reach</h3>
                                <p>Serving clients across 15+ countries with reliable and efficient solutions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-cta">
                        <h2>Ready to Start Your Project?</h2>
                        <Link to="/contact" className="cta-button">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

