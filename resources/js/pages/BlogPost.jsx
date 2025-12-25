import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowLeft } from 'react-icons/fi';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const relatedPosts = []; // Can be implemented later

    React.useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/posts/${slug}`);
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-post-page">
                <div className="container">
                    <div className="loading">Loading...</div>
                </div>
            </div>
        );
    }

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

