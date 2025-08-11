const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../db');

// Configure Passport for Google OAuth
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/api/users/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if user exists in the database
                let user = await db.query('SELECT * FROM users WHERE email = $1', [profile.emails[0].value]);
                if (user.rows.length === 0) {
                    // If user does not exist, create a new one
                    user = await db.query(
                        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
                        [profile.displayName, profile.emails[0].value]
                    );
                }
                return done(null, user.rows[0]);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        done(null, user.rows[0]);
    } catch (err) {
        done(err, null);
    }
});

// Routes for Google Authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/'); // Redirect to the homepage or dashboard
    }
);

// Route to check authentication status
router.get('/me', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ error: 'Not authenticated' });
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: 'Logout failed' });
        res.redirect('/');
    });
});

module.exports = router;

