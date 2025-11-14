# Webybuild - Web Development Company Website

A modern, full-stack website for a web development company built with Node.js/Express (backend) and React.js (frontend).

## Features

- **Modern Homepage** with hero section, statistics, and service highlights
- **Service Pages** for:
  - Web Design
  - Web Development
  - Inventory Management
  - Mobile Applications
  - Cloud Services
- **Blog System** with:
  - Blog listing with pagination
  - Individual blog post pages
  - Category filtering
  - Search functionality
- **Contact Form** with email notifications
- **Responsive Design** - Works on all devices
- **About Page** - Company information
- **Growth Page** - Development process showcase

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: React 18 with React Router
- **Database**: MySQL with Sequelize ORM
- **Email**: Nodemailer
- **Styling**: Custom CSS with modern design
- **Build Tool**: Vite

## Installation

### Prerequisites

- Node.js >= 16.x
- MySQL >= 5.7
- NPM or Yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Configure your `.env` file with database credentials:
```env
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=webybuild
DB_USERNAME=root
DB_PASSWORD=your_password
```

4. Configure mail settings in `.env`:
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

5. Create your database:
```sql
CREATE DATABASE webybuild;
```

6. Run the application:
```bash
npm run dev
```

This will start both the backend server (port 3000) and frontend dev server (port 5173).

## Running the Application

### Development Mode

```bash
npm run dev
```

This runs both backend and frontend concurrently:
- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`

### Production Mode

1. Build the React app:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

3. Visit `http://localhost:3000`

## API Endpoints

### Contact
- `POST /api/v1/contact` - Submit contact form

### Blog
- `GET /api/v1/blog` - Get all blog posts (with pagination, search, category filters)
- `GET /api/v1/blog/:slug` - Get single blog post
- `GET /api/v1/blog/categories` - Get all categories
- `GET /api/v1/blog/featured` - Get featured posts

## Email Configuration

The contact form sends emails to `rahuhlktiwari12@gmail.com`. Make sure to configure your mail settings in the `.env` file.

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `MAIL_PASSWORD`

## Database Structure

### blog_posts
- id
- title
- slug
- excerpt
- content
- featured_image
- category
- author
- is_featured
- status (draft/published)
- meta_title
- meta_description
- views
- createdAt
- updatedAt

### contact_submissions
- id
- name
- email
- phone
- subject
- message
- is_read
- createdAt
- updatedAt

## Adding Blog Posts

You can add blog posts through the database or create a seeder. To seed sample data:

1. Set `SEED_DATA=true` in `.env`
2. Restart the server

Or manually insert via MySQL:
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, category, author, status) 
VALUES ('Your Title', 'your-slug', 'Excerpt...', '<p>Content...</p>', 'Category', 'Admin', 'published');
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

## License

This project is open-sourced software licensed under the MIT license.
