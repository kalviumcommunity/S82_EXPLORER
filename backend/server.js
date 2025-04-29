const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,       // your mysql username from .env
  password: process.env.DB_PASSWORD, // your mysql password from .env
  database: process.env.DB_NAME    // your database name from .env
});


app.get("/", (req, res) => {
  db.query('SELECT 1', (err) => {
    if (err) {
      console.error('Database not connected');
      return res.send('Not Connected to Database');
    }
    console.log('Connected to Database');
    res.send('Connected to Database');
  });
});


app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result);
  });
});

app.post('/api/places', (req, res) => {
  const { name, location, created_by } = req.body;

  const sql = 'INSERT INTO places (name, location, created_by) VALUES (?, ?, ?)';
  db.query(sql, [name, location, created_by], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ id: result.insertId, name, location, created_by });
  });
});


app.get('/api/places/user/:userId', (req, res) => {
  const userId = req.params.userId;

  const sql = 'SELECT * FROM places WHERE created_by = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result);
  });
});


app.get('/ping', (req, res) => res.send('hello world'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
