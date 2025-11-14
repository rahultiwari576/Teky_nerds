# Quick Setup Guide - Node.js Version

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Environment Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your database credentials:
```env
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=webybuild
DB_USERNAME=root
DB_PASSWORD=your_password
```

3. Configure email settings (for contact form):
```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_FROM_ADDRESS=hello@webybuild.com
MAIL_FROM_NAME=Webybuild
```

**Note:** For Gmail, you need to:
- Enable 2-factor authentication
- Generate an App Password
- Use the App Password in `MAIL_PASSWORD`

## Step 3: Database Setup

1. Create your database:
```sql
CREATE DATABASE webybuild;
```

2. The database tables will be created automatically when you start the server (using Sequelize sync).

3. (Optional) Seed sample blog posts:
   - Set `SEED_DATA=true` in `.env`
   - Restart the server

## Step 4: Run the Application

### Development Mode

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3000`
- Frontend dev server on `http://localhost:5173`

Visit: `http://localhost:5173`

### Production Mode

1. Build assets:
```bash
npm run build
```

2. Start server:
```bash
npm start
```

Visit: `http://localhost:3000`

## Troubleshooting

### Database Connection Issues
- Verify database credentials in `.env`
- Ensure MySQL is running
- Check database exists

### Email Not Sending
- Check your mail configuration in `.env`
- For Gmail, ensure you're using an App Password
- Test with a service like Mailtrap for development

### React Not Loading
- Make sure you're running `npm run dev` in development
- Or run `npm run build` for production
- Check browser console for errors

### Port Already in Use
- Change `PORT` in `.env` for backend
- Change port in `vite.config.js` for frontend

## Adding Blog Posts

You can add blog posts via MySQL:

```sql
INSERT INTO blog_posts (title, slug, excerpt, content, category, author, status) 
VALUES (
    'Your Post Title',
    'your-post-slug',
    'Short description...',
    '<p>Full content here...</p>',
    'Web Development',
    'Admin',
    'published'
);
```

Or use Node.js:

```javascript
import { BlogPost } from './server/models/BlogPost.js';

await BlogPost.create({
    title: 'Your Post Title',
    slug: 'your-post-slug',
    excerpt: 'Short description...',
    content: '<p>Full content...</p>',
    category: 'Web Development',
    author: 'Admin',
    status: 'published'
});
```

## Project Structure

```
├── server/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── BlogPost.js
│   │   └── ContactSubmission.js
│   ├── routes/
│   │   ├── blog.js
│   │   └── contact.js
│   ├── services/
│   │   └── email.js
│   ├── seeders/
│   │   └── blogPosts.js
│   └── index.js
├── resources/
│   └── js/
│       ├── components/
│       ├── pages/
│       ├── config/
│       └── App.jsx
├── dist/ (build output)
└── package.json
```
