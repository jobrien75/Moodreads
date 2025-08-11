const express = require('express');
const router = express.Router();
const db = require('../db');

// Update reading progress
router.post('/update', async (req, res) => {
    const { userId, bookId, progress } = req.body;
    try {
        await db.query(
            'INSERT INTO reading_sessions (user_id, book_id, progress) VALUES ($1, $2, $3) ON CONFLICT (user_id, book_id) DO UPDATE SET progress = $3, last_accessed = CURRENT_TIMESTAMP',
            [userId, bookId, progress]
        );
        res.status(200).json({ message: 'Reading progress updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update progress' });
    }
});

module.exports = router; 
