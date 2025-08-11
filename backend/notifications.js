const express = require('express');
const router = express.Router();
const db = require('../db');

// Fetch all notifications for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const notifications = await db.query('SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
        res.json(notifications.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
});

// Mark a notification as read
router.post('/mark-read/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('UPDATE notifications SET is_read = TRUE WHERE id = $1', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to mark notification as read' });
    }
});

// Add a new notification
router.post('/add', async (req, res) => {
    const { userId, message } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO notifications (user_id, message, is_read) VALUES ($1, $2, FALSE) RETURNING *',
            [userId, message]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add notification' });
    }
});

module.exports = router;

