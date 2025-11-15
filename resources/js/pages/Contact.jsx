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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Option 1: Use mailto link (opens email client)
        const { name, email, phone, subject, message } = formData;
        const mailtoLink = `mailto:hello@tekynerds.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'Your email client should open. If not, please email us at hello@tekynerds.com'
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setLoading(false);
        }, 500);

        // Option 2: For a production site, you could use EmailJS or Formspree here
        // Example with EmailJS (requires setup):
        // emailjs.send('service_id', 'template_id', formData, 'user_id')
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
                                        <p>USA, Canada, Germany, Australia, Switzerland, Ireland</p>
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

