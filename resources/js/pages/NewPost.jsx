import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSave, FiX } from 'react-icons/fi';
import './NewPost.css';

const NewPost = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        category: '',
        featured_image: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                navigate('/blog');
            } else {
                setError(result.message || 'Failed to create post');
            }
        } catch (err) {
            setError('An error occurred while creating the post');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="new-post-page">
            <div className="container">
                <h1 className="page-title">Create New Blog Post</h1>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="new-post-form">
                    <div className="form-group">
                        <label htmlFor="title">Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="e.g. Technology, Design"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author Name</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="featured_image">Featured Image URL</label>
                        <input
                            type="url"
                            id="featured_image"
                            name="featured_image"
                            value={formData.featured_image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="excerpt">Excerpt</label>
                        <textarea
                            id="excerpt"
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Short summary of the post..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content * (HTML supported)</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            rows="15"
                            className="content-editor"
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={() => navigate('/blog')} className="cancel-button">
                            <FiX /> Cancel
                        </button>
                        <button type="submit" disabled={loading} className="save-button">
                            <FiSave /> {loading ? 'Saving...' : 'Publish Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;
