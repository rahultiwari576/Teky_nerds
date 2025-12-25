import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
    // Fetch posts from API
    const [allPosts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 9;

    // Get unique categories from posts
    const categories = useMemo(() => {
        const cats = allPosts
            .map(post => post.category)
            .filter(Boolean);
        return [...new Set(cats)];
    }, [allPosts]);

    // Filter and paginate posts
    const { posts, totalPages } = useMemo(() => {
        let filtered = [...allPosts];

        // Filter by search term
        if (searchTerm) {
            const search = searchTerm.toLowerCase();
            filtered = filtered.filter(post =>
                post.title?.toLowerCase().includes(search) ||
                post.content?.toLowerCase().includes(search) ||
                post.excerpt?.toLowerCase().includes(search)
            );
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        // Paginate
        const total = Math.ceil(filtered.length / perPage);
        const start = (currentPage - 1) * perPage;
        const paginated = filtered.slice(start, start + perPage);

        return { posts: paginated, totalPages: total || 1 };
    }, [allPosts, searchTerm, selectedCategory, currentPage, perPage]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="container">
                    <h1 className="page-title">OUR <span className="highlight">BLOGS</span></h1>
                    <p className="page-subtitle">
                        We use an agile approach to test assumptions and connect with the needs of our audience early and often.
                    </p>
                    <div style={{ marginTop: '20px' }}>
                        <Link to="/blog/new" className="search-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                            + Create New Post
                        </Link>
                    </div>
                </div>
            </section>

            <section className="blog-content">
                <div className="container">
                    <div className="blog-filters">
                        <form onSubmit={handleSearch} className="search-form">
                            <div className="search-input-wrapper">
                                <FiSearch className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                            </div>
                            <button type="submit" className="search-button">Search</button>
                        </form>

                        <div className="category-filters">
                            <button
                                className={`category-filter ${selectedCategory === '' ? 'active' : ''}`}
                                onClick={() => {
                                    setSelectedCategory('');
                                    setCurrentPage(1);
                                }}
                            >
                                All
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {loading ? (
                        <div className="loading">Loading posts...</div>
                    ) : posts.length === 0 ? (
                        <div className="no-posts">No blog posts found.</div>
                    ) : (
                        <>
                            <div className="blog-grid">
                                {posts.map((post) => (
                                    <article key={post.id} className="blog-card">
                                        {post.featured_image && (
                                            <div className="blog-card-image">
                                                <img src={post.featured_image} alt={post.title} />
                                            </div>
                                        )}
                                        <div className="blog-card-content">
                                            {post.category && (
                                                <span className="blog-category">{post.category}</span>
                                            )}
                                            <h2 className="blog-card-title">
                                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h2>
                                            <p className="blog-card-excerpt">{post.excerpt}</p>
                                            <div className="blog-card-meta">
                                                <span className="blog-meta-item">
                                                    <FiCalendar /> {formatDate(post.created_at)}
                                                </span>
                                                <span className="blog-meta-item">
                                                    <FiUser /> {post.author}
                                                </span>
                                            </div>
                                            <Link to={`/blog/${post.slug}`} className="blog-read-more">
                                                Read More <FiArrowRight />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className="pagination-button"
                                    >
                                        Previous
                                    </button>
                                    <span className="pagination-info">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={currentPage === totalPages}
                                        className="pagination-button"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;

