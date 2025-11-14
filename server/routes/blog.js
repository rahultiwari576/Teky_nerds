import express from 'express';

const router = express.Router();

// Get all blog posts with pagination, search, and category filter
router.get('/', async (req, res) => {
    try {
        const { page = 1, per_page = 9 } = req.query;
        const limit = parseInt(per_page);
        const offset = (parseInt(page) - 1) * limit;

        // Return empty data (no database)
        res.json({
            data: [],
            current_page: parseInt(page),
            per_page: limit,
            total: 0,
            last_page: 0
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
});

// Get single blog post by slug
router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        
        // Return 404 (no database)
        return res.status(404).json({ error: 'Post not found' });
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ error: 'Failed to fetch blog post' });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        // Return empty categories (no database)
        res.json([]);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

// Get featured posts
router.get('/featured', async (req, res) => {
    try {
        // Return empty featured posts (no database)
        res.json([]);
    } catch (error) {
        console.error('Error fetching featured posts:', error);
        res.status(500).json({ error: 'Failed to fetch featured posts' });
    }
});

export default router;

