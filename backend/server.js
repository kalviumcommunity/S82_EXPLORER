const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());


const USERS = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
];


app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  const user = USERS.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  res.cookie('username', username, {
    httpOnly: true,
    sameSite: 'strict',
    secure: false 
  });

  res.json({ message: `Logged in as ${username}` });
});


app.post('/auth/logout', (req, res) => {
  res.clearCookie('username');
  res.json({ message: 'Logged out successfully' });
});


app.get('/auth/check', (req, res) => {
  const { username } = req.cookies;
  if (!username) {
    return res.status(401).json({ message: 'Not logged in' });
  }
  res.json({ message: `You are logged in as ${username}` });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
