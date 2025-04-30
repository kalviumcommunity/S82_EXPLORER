const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const app = express();
app.use(cookieParser());
app.use(express.json());

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());


const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Dummy users for testing (in a real scenario, you'd query the DB)
const users = [
  { username: 'testuser', password: 'password123' },
  { username: 'john_doe', password: 'securepassword' },
];

// Login endpoint
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user based on username
  const user = users.find(user => user.username === username);

  // If user not found or password doesn't match
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

  // Set the JWT token in the cookie (HTTP-only)
  res.cookie('token', token, {
    httpOnly: true, // Makes the cookie inaccessible to JavaScript
    secure: process.env.NODE_ENV === 'production', // Set secure flag for production
    maxAge: 3600000, // 1 hour
  });

  res.status(200).json({ message: "Login successful" });
});

// Logout endpoint
app.post('/auth/logout', (req, res) => {
  // Clear the JWT token cookie
  res.clearCookie('token');
  res.status(200).json({ message: "Logged out successfully" });
});

// Middleware to check JWT authentication
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  // If no token, return error
  if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

  // Verify the JWT token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user; // Attach the decoded user data to the request object
    next(); // Continue to the next middleware or route handler
  });
};

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);


// A protected route that requires authentication
app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
