import { BlogPost } from '../models/BlogPost.js';

export const seedBlogPosts = async () => {
    const posts = [
        {
            title: 'Getting Started with React Development',
            slug: 'getting-started-with-react-development',
            excerpt: 'Learn the fundamentals of React and how to build modern web applications with this powerful JavaScript library.',
            content: '<p>React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we\'ll explore the fundamentals of React development and how you can leverage it to create modern, interactive web applications.</p><h2>What is React?</h2><p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</p><h2>Key Features</h2><ul><li>Component-based architecture</li><li>Virtual DOM for performance</li><li>One-way data binding</li><li>Rich ecosystem</li></ul>',
            category: 'Web Development',
            author: 'Admin',
            is_featured: true,
            status: 'published',
        },
        {
            title: 'Node.js Best Practices for 2024',
            slug: 'nodejs-best-practices-2024',
            excerpt: 'Discover the latest best practices and patterns for building robust Node.js applications in 2024.',
            content: '<p>Node.js continues to evolve, and staying up-to-date with best practices is crucial for building maintainable applications. Let\'s explore the latest recommendations.</p><h2>Code Organization</h2><p>Proper code organization is essential for maintainability. Use service classes, repositories, and follow SOLID principles.</p>',
            category: 'Backend Development',
            author: 'Admin',
            is_featured: true,
            status: 'published',
        },
        {
            title: 'Mobile App Development Trends',
            slug: 'mobile-app-development-trends',
            excerpt: 'Explore the latest trends in mobile app development and what technologies are shaping the future.',
            content: '<p>The mobile app development landscape is constantly evolving. From React Native to Flutter, discover what\'s trending in 2024.</p>',
            category: 'Mobile Development',
            author: 'Admin',
            is_featured: false,
            status: 'published',
        },
    ];

    for (const post of posts) {
        await BlogPost.findOrCreate({
            where: { slug: post.slug },
            defaults: post
        });
    }

    console.log('Blog posts seeded successfully!');
};

