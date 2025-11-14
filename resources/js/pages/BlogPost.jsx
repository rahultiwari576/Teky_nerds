import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowLeft } from 'react-icons/fi';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    // Static data - no API needed
    // In a real static site, you could import blog posts from a JSON file
    const post = null; // No posts available
    const relatedPosts = [];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (!post) {
        return (
            <div className="blog-post-page">
                <div className="container">
                    <div className="not-found">Post not found.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <article className="blog-post">
                <div className="container">
                    <Link to="/blog" className="back-link">
                        <FiArrowLeft /> Back to Blog
                    </Link>

                    {post.featured_image && (
                        <div className="post-featured-image">
                            <img src={post.featured_image} alt={post.title} />
                        </div>
                    )}

                    <div className="post-header">
                        {post.category && (
                            <span className="post-category">{post.category}</span>
                        )}
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-meta">
                            <span className="post-meta-item">
                                <FiCalendar /> {formatDate(post.created_at)}
                            </span>
                            <span className="post-meta-item">
                                <FiUser /> {post.author}
                            </span>
                        </div>
                    </div>

                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {relatedPosts.length > 0 && (
                        <section className="related-posts">
                            <h2 className="related-title">Related Posts</h2>
                            <div className="related-grid">
                                {relatedPosts.map((relatedPost) => (
                                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="related-card">
                                        {relatedPost.featured_image && (
                                            <div className="related-image">
                                                <img src={relatedPost.featured_image} alt={relatedPost.title} />
                                            </div>
                                        )}
                                        <div className="related-content">
                                            <h3>{relatedPost.title}</h3>
                                            <p>{relatedPost.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </article>
        </div>
    );
};

export default BlogPost;

