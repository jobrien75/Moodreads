const express = require('express');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/static', express.static('public')); // Serve static files (e.g., music)

// Routes
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const sessionRoutes = require('./routes/sessions');
const notificationRoutes = require('./routes/notifications');
const themeRoutes = require('./routes/themes');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/themes', themeRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

const blogRoutes = require('./routes/blog');

app.use('/api/blog', blogRoutes); 

const session = require('express-session');
const passport = require('passport');

// Express session middleware
app.use(
    session({
        secret: 'your_session_secret',
        resave: false,
        saveUninitialized: false,
    })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
