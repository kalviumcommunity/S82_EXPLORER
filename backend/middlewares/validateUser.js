// middlewares/validateUser.js

module.exports = function validateUser(req, res, next) {
    const { name, email, password, age, address, phoneNumber, role } = req.body;
  
    if (!name || typeof name !== 'string' || name.length < 3) {
      return res.status(400).json({ message: 'Name is required and must be at least 3 characters.' });
    }
  
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Valid email is required.' });
    }
  
    if (!password || password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    }
  
    if (!age || typeof age !== 'number' || age < 13) {
      return res.status(400).json({ message: 'Age must be a number and at least 13.' });
    }
  
    if (!address || typeof address !== 'string') {
      return res.status(400).json({ message: 'Address is required.' });
    }
  
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      return res.status(400).json({ message: 'Phone number must be exactly 10 digits.' });
    }
  
    if (role && !['user', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Role must be either "user" or "admin".' });
    }
  
    next();
  };