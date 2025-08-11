const express = require('express');
const router = express.Router();
const db = require('../db');

// Fetch all books
router.get('/', async (req, res) => {
    try {
        const books = await db.query('SELECT id, title, author, description FROM books');
        res.json(books.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

// Fetch a single book by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const book = await db.query('SELECT * FROM books WHERE id = $1', [id]);
        if (book.rows.length === 0) return res.status(404).json({ error: 'Book not found' });
        res.json(book.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
});

module.exports = router;
