import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebDesign from './pages/services/WebDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import InventoryManagement from './pages/services/InventoryManagement';
import MobileApplications from './pages/services/MobileApplications';
import CloudServices from './pages/services/CloudServices';
import DigitalMarketing from './pages/services/DigitalMarketing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NewPost from './pages/NewPost';
import Contact from './pages/Contact';
import Growth from './pages/Growth';

function App() {
    try {
        return (
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/web-design" element={<WebDesign />} />
                    <Route path="/services/web-development" element={<WebDevelopment />} />
                    <Route path="/services/inventory-management" element={<InventoryManagement />} />
                    <Route path="/services/mobile-applications" element={<MobileApplications />} />
                    <Route path="/services/cloud-services" element={<CloudServices />} />
                    <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/new" element={<NewPost />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/growth" element={<Growth />} />
                </Routes>
            </Layout>
        );
    } catch (error) {
        console.error('Error in App component:', error);
        return (
            <div style={{ padding: '20px', color: 'red' }}>
                <h1>Error Loading App</h1>
                <p>{error.message}</p>
                <pre>{error.stack}</pre>
            </div>
        );
    }
}

export default App;

