import React, { useState } from 'react';
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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Send form data to backend server for email sending
        try {
            const response = await fetch('/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
            } else {
                setStatus({ type: 'error', message: result.message || 'Failed to send message.' });
            }
        } catch (err) {
            console.error('Error sending email:', err);
            setStatus({ type: 'error', message: 'An error occurred while sending your message.' });
        }
        // Reset form fields after attempt
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setLoading(false);
        //   .then(() => { /* success */ })
        //   .catch(() => { /* error */ });
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">
                        HAVE A QUESTION?
                    </h1>
                    <h2 className="page-subheading">
                        <span className="highlight">Our Team is Happy to assist you</span>
                    </h2>
                    <p className="page-subtitle">
                        Achieve Digital Excellence, Partner with Our Web Development Wizards for Success.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h2 className="contact-heading">Get In Touch</h2>
                            <p className="contact-marketing-quote">
                                Thank you for your interest in Tekynerds and Our Services. We will get back to you within 24 hrs.
                            </p>
                            <p>
                                We're here to help! Whether you have a question about our services, need a quote,
                                or want to discuss your project, our team is ready to assist you.
                            </p>
                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <FiMail className="contact-icon" />
                                    <div>
                                        <h3>Email</h3>
                                        <p>hello@tekynerds.com</p>
                                    </div>
                                </div>
                                <div className="contact-detail-item">
                                    <FiPhone className="contact-icon" />
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+91- 7900167247</p>
                                    </div>
                                </div>
                                <div className="contact-detail-item">
                                    <FiMessageSquare className="contact-icon" />
                                    <div>
                                        <h3>Locations</h3>
                                        <p>USA, Canada, Germany, Australia, Switzerland, Ireland,India,Europe</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <FiUser /> Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <FiMail /> Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <FiPhone /> Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91- 7900167247"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">
                                        <FiMessageSquare /> Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="What is this regarding?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        <FiMessageSquare /> Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {status.message && (
                                    <div className={`form-status ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button type="submit" className="submit-button" disabled={loading}>
                                    {loading ? 'Sending...' : (
                                        <>
                                            <FiSend /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

