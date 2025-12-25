import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { config as dotenvConfig } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

dotenvConfig();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

// Load SMTP config from environment variables
const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
const smtpPort = parseInt(process.env.SMTP_PORT) || 465;
const smtpUser = process.env.SMTP_USER || 'hello@tekynerds.com';
const smtpPass = process.env.SMTP_PASS || '';

console.log('SMTP Config:', {
  host: smtpHost,
  port: smtpPort,
  user: smtpUser,
  passLength: smtpPass.length
});

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: true, // true for 465, false for other ports
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log('Received email request:', { name, email, subject });

  const mailOptions = {
    from: smtpUser,
    to: smtpUser,
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email'
    });
  }
});

// Blog API Routes
const DATA_FILE = path.join(__dirname, 'data', 'posts.json');

// Ensure data directory exists
try {
  await fs.access(path.join(__dirname, 'data'));
} catch {
  await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });
}

// Ensure posts.json exists
try {
  await fs.access(DATA_FILE);
} catch {
  await fs.writeFile(DATA_FILE, '[]');
}

app.get('/api/posts', async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const posts = JSON.parse(data);
    res.json(posts);
  } catch (error) {
    console.error('Error reading posts:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

app.get('/api/posts/:slug', async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const posts = JSON.parse(data);
    const post = posts.find(p => p.slug === req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error reading post:', error);
    res.status(500).json({ message: 'Failed to fetch post' });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const newPost = req.body;

    // Validate required fields
    if (!newPost.title || !newPost.content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    // Generate slug from title if not provided
    if (!newPost.slug) {
      newPost.slug = newPost.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }

    // Add metadata
    newPost.id = Date.now().toString();
    newPost.created_at = new Date().toISOString();

    // Read existing posts
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const posts = JSON.parse(data);

    // Check for duplicate slug
    if (posts.some(p => p.slug === newPost.slug)) {
      // Append timestamp to slug to make it unique
      newPost.slug = `${newPost.slug}-${Date.now()}`;
    }

    // Add new post to beginning of array
    posts.unshift(newPost);

    // Save back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2));

    res.status(201).json({ success: true, post: newPost });
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ message: 'Failed to save post' });
  }
});

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Email server listening on port ${PORT}`);
});
