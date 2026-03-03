import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiPackage, FiImage, FiFileText, FiTrendingUp, FiCloud, FiTablet, FiShoppingBag } from 'react-icons/fi';

const Services = () => {
    const services = [
        { title: 'Web Development', path: '/services/web-development', icon: FiCode },
        { title: 'Inventory Management', path: '/services/inventory-management', icon: FiPackage },
        { title: 'Web Design', path: '/services/web-design', icon: FiImage },
        { title: 'Blog', path: '/blog', icon: FiFileText },
        { title: 'Growth', path: '/growth', icon: FiTrendingUp },
        { title: 'Cloud Solutions', path: '/services/cloud-services', icon: FiCloud },
        { title: 'Mobile Applications', path: '/services/mobile-applications', icon: FiTablet },
        { title: 'Digital Marketing', path: '/services/digital-marketing', icon: FiShoppingBag },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Our Services</h1>
                    <p className="text-[#475569] max-w-2xl mx-auto text-lg">
                        Comprehensive digital solutions to transform your business
                    </p>
                </div>
            </section>

            <section className="pb-20">
                <div className="container">
                    <h2 className="text-xl font-semibold text-[#111827] mb-6">Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={index}
                                    to={service.path}
                                    className="flex items-center gap-4 p-6 bg-white border border-[#E5E7EB] rounded-lg hover:border-[#2563EB] hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1E3A8A] text-white group-hover:scale-[1.02] transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-[#111827]">{service.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
