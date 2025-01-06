// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Here, you can handle the authentication logic (e.g., check DB or JWT)
  if (email === 'test@example.com' && password === 'password123') {
    return res.status(200).json({ message: 'Login successful' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
