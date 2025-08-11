const express = require('express');
const router = express.Router();
const db = require('../db');

// Fetch all blog posts
router.get('/', async (req, res) => {
    try {
        const posts = await db.query(
            'SELECT blog_posts.*, users.name AS author FROM blog_posts JOIN users ON blog_posts.author_id = users.id ORDER BY created_at DESC'
        );
        res.json(posts.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
});

// Fetch a single blog post with comments
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await db.query(
            'SELECT blog_posts.*, users.name AS author FROM blog_posts JOIN users ON blog_posts.author_id = users.id WHERE blog_posts.id = $1',
            [id]
        );
        const comments = await db.query(
            'SELECT blog_comments.*, users.name AS commenter FROM blog_comments JOIN users ON blog_comments.user_id = users.id WHERE blog_comments.post_id = $1 ORDER BY created_at ASC',
            [id]
        );
        res.json({ post: post.rows[0], comments: comments.rows });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch blog post' });
    }
});

// Add a new blog post
router.post('/', async (req, res) => {
    const { title, content, author_id } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO blog_posts (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
            [title, content, author_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create blog post' });
    }
});

// Add a new comment to a blog post
router.post('/:id/comments', async (req, res) => {
    const { id } = req.params; // Post ID
    const { user_id, comment } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO blog_comments (post_id, user_id, comment) VALUES ($1, $2, $3) RETURNING *',
            [id, user_id, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add comment' });
    }
});

module.exports = router; 

