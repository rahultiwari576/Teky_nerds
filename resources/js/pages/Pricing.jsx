import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Pricing.css';

const Pricing = () => {
    const webDevPlans = [
        { title: 'Starter Website Package', price: '₹10,000 – ₹30,000', features: ['5–7 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO Setup', '1 Month Support'] },
        { title: 'Business Web App', price: '₹40,000 – ₹3,00,000', features: ['Custom Backend (Laravel / PHP)', 'Admin Dashboard', 'API Integration', 'Authentication System', '3 Months Support'] },
        { title: 'E-Commerce Solution', price: '₹50,000 – ₹2,50,000', features: ['Product Management', 'Payment Gateway Integration', 'Order Tracking', 'Admin Panel', 'Basic SEO'] },
    ];

    const mobilePlans = [
        { title: 'Basic App', price: '₹60,000 – ₹1,20,000', features: ['5–8 Screens', 'API Integration', 'Android or iOS', 'Basic UI/UX'] },
        { title: 'Advanced App', price: '₹1,50,000 – ₹3,50,000', features: ['Custom Backend', 'Push Notifications', 'Login & User Roles', 'Admin Panel'] },
    ];

    const marketingPlans = [
        { title: 'SEO Management', price: '₹20,000 – ₹60,000 / month' },
        { title: 'Social Media Management', price: '₹15,000 – ₹50,000 / month' },
        { title: 'Full Digital Marketing', price: '₹40,000 – ₹1,00,000 / month' },
    ];

    const chatbotPlan = {
        title: 'Chatbot Setup',
        setupPrice: '₹25,000 – ₹1,35,000 (One-time)',
        monthlyPrice: '₹5,000 – ₹25,000 / month',
        features: ['OpenAI API Integration', 'Automated Customer Replies', 'Chat History Storage', 'Custom Business Prompting', 'Usage Monitoring'],
    };

    const PricingCard = ({ title, price, features, extraPrice }) => (
        <article className="pricing-card" itemScope itemType="https://schema.org/Product">
            <h3 className="pricing-card-title" itemProp="name">{title}</h3>
            <p className="pricing-card-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span itemProp="price">{price}</span>
            </p>
            {extraPrice && <p className="pricing-card-price-extra">{extraPrice}</p>}
            {features && features.length > 0 && (
                <ul className="pricing-card-features">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            )}
            <Link to="/contact" className="pricing-card-btn">Get Started</Link>
        </article>
    );

    return (
        <main className="pricing-page" role="main">
            <SEO
                title="Pricing - Tekynerds | Transparent Web Development & Software Pricing"
                description="Flexible pricing for web development, mobile apps, digital marketing, and AI chatbot integration. Get transparent quotes tailored to your business needs."
            />

            <section className="pricing-hero" aria-labelledby="pricing-heading">
                <div className="container">
                    <h1 id="pricing-heading" className="pricing-hero-title">
                        Transparent Pricing Plans
                    </h1>
                    <p className="pricing-hero-subtitle">
                        Flexible pricing tailored to your business needs.
                    </p>
                </div>
            </section>

            <section className="pricing-section" aria-labelledby="web-dev-heading">
                <div className="container">
                    <h2 id="web-dev-heading" className="pricing-section-title">
                        Web Development
                    </h2>
                    <div className="pricing-cards-grid pricing-cards-grid-3">
                        {webDevPlans.map((plan, i) => (
                            <PricingCard key={i} title={plan.title} price={plan.price} features={plan.features} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-section pricing-section-alt" aria-labelledby="mobile-heading">
                <div className="container">
                    <h2 id="mobile-heading" className="pricing-section-title">
                        Mobile App Development
                    </h2>
                    <div className="pricing-cards-grid pricing-cards-grid-2">
                        {mobilePlans.map((plan, i) => (
                            <PricingCard key={i} title={plan.title} price={plan.price} features={plan.features} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-section" aria-labelledby="marketing-heading">
                <div className="container">
                    <h2 id="marketing-heading" className="pricing-section-title">
                        Digital Marketing (Monthly Retainer)
                    </h2>
                    <div className="pricing-cards-grid pricing-cards-grid-3">
                        {marketingPlans.map((plan, i) => (
                            <PricingCard key={i} title={plan.title} price={plan.price} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-section pricing-section-alt" aria-labelledby="chatbot-heading">
                <div className="container">
                    <h2 id="chatbot-heading" className="pricing-section-title">
                        AI Chatbot Integration
                    </h2>
                    <div className="pricing-card-wrap">
                        <PricingCard
                            title={chatbotPlan.title}
                            price={chatbotPlan.setupPrice}
                            extraPrice={`Monthly Maintenance: ${chatbotPlan.monthlyPrice}`}
                            features={chatbotPlan.features}
                        />
                    </div>
                </div>
            </section>

            <section className="pricing-cta" aria-labelledby="cta-heading">
                <div className="container">
                    <h2 id="cta-heading" className="pricing-cta-title">
                        Need a Custom Quote? Contact Us Today.
                    </h2>
                    <Link to="/contact" className="pricing-cta-btn">
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Pricing;
