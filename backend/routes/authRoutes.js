const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [
  { id: 1, username: 'alice', password: 'pass123' },
  { id: 2, username: 'bob', password: 'pass456' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.cookie('token', token, {
    httpOnly: true,
    secure: false, // use true in production with HTTPS
    sameSite: 'lax'
  });

  res.json({ message: 'Login successful' });
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;
