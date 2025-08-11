// Load environment variables
require('dotenv').config();

// Import the 'Pool' class from the 'pg' (PostgreSQL) library
const { Pool } = require('pg');

// Log the database URL to check if it's loaded correctly
console.log("Database URL:", process.env.DATABASE_URL); // Add this line for debugging

// Create a new pool instance to manage connections to the PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Event listener to log a message when a connection to the database is established
pool.on('connect', () => {
  console.log('Connected to the database'); // Print confirmation message when connected
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
