const express = require('express');
const router = express.Router();
const Sentiment = require('sentiment');
const db = require('../db');

const sentiment = new Sentiment();

// Mood-to-Music Mapping
const moodMusicMap = {
    positive: ['upbeat_music.mp3', 'happy_guitar.mp3'],
    neutral: ['calm_music.mp3', 'ambient_peace.mp3'],
    negative: ['dark_ambient.mp3', 'tense_drums.mp3'],
};

// Analyze mood and recommend music
router.post('/analyze', async (req, res) => {
    const { bookId, section } = req.body; // Section could be a page number or text snippet
    try {
        const book = await db.query('SELECT content FROM books WHERE id = $1', [bookId]);
        if (book.rows.length === 0) return res.status(404).json({ error: 'Book not found' });

        const content = book.rows[0].content;
        const snippet = content.slice(section.start, section.end);
        const analysis = sentiment.analyze(snippet);

        const mood = analysis.score > 0 ? 'positive' : analysis.score < 0 ? 'negative' : 'neutral';
        const music = moodMusicMap[mood];

        res.json({ mood, music });
    } catch (err) {
        res.status(500).json({ error: 'Mood analysis failed' });
    }
});

module.exports = router; 
