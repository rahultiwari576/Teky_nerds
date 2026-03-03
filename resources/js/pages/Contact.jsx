import React, { useState } from 'react';
import SEO from '../components/SEO';
import { FiMail, FiUser, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: result.message || 'Failed to send message.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'An error occurred while sending your message. Please ensure the server is running.' });
        }
        setLoading(false);
    };

    return (
        <div className="contact-page">
            <SEO title="Contact Us - Tekynerds" description="Reach out to Tekynerds for web development, marketing, or software inquiries." />
            <section className="contact-hero">
                <div className="container">
                    <h1 className="contact-hero-title">Have a Question?</h1>
                    <h2 className="contact-hero-subtitle">Our Team is Happy to Assist You</h2>
                    <p className="contact-hero-desc">
                        Achieve Digital Excellence. Partner with our web development experts for success.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <h2 className="contact-info-title">Get In Touch</h2>
                            <p className="contact-info-quote">
                                Thank you for your interest in Tekynerds. We will get back to you within 24 hrs.
                            </p>
                            <p className="contact-info-text">
                                We're here to help! Whether you have a question about our services, need a quote, or want to discuss your project, our team is ready to assist you.
                            </p>
                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <FiMail className="contact-detail-icon" size={20} />
                                    <div>
                                        <h3>Email</h3>
                                        <p>hello@tekynerds.com</p>
                                    </div>
                                </div>
                                <div className="contact-detail-item">
                                    <FiPhone className="contact-detail-icon" size={20} />
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+91-7900167247</p>
                                    </div>
                                </div>
                                <div className="contact-detail-item">
                                    <FiMessageSquare className="contact-detail-icon" size={20} />
                                    <div>
                                        <h3>Locations</h3>
                                        <p>USA, Canada, Germany, Australia, Switzerland, Ireland, India, Europe</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="contact-form-grid">
                                <div className="contact-form-group">
                                    <label className="contact-form-label" htmlFor="name">
                                        <FiUser size={16} /> Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                        className="contact-form-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label className="contact-form-label" htmlFor="email">
                                        <FiMail size={16} /> Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        className="contact-form-input"
                                    />
                                </div>
                            </div>
                            <div className="contact-form-grid">
                                <div className="contact-form-group">
                                    <label className="contact-form-label" htmlFor="phone">
                                        <FiPhone size={16} /> Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91-7900167247"
                                        className="contact-form-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label className="contact-form-label" htmlFor="subject">
                                        <FiMessageSquare size={16} /> Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="What is this regarding?"
                                        className="contact-form-input"
                                    />
                                </div>
                            </div>
                            <div className="contact-form-group">
                                <label className="contact-form-label" htmlFor="message">
                                    <FiMessageSquare size={16} /> Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    className="contact-form-textarea"
                                />
                            </div>
                            {status.message && (
                                <div className={`contact-form-status ${status.type}`}>
                                    {status.message}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={loading}
                                className="contact-form-submit"
                            >
                                {loading ? 'Sending...' : <><FiSend size={16} /> Send Message</>}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
