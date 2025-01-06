const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // Read users from the file
  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

  // Find user
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  // Send successful login response
  res.status(200).json({ message: 'Login successful', user });
};
