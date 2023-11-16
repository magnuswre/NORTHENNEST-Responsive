// userProfileRoute.js
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../Schema/userSchema');

router.get('/', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]; // Assuming the token is in the format "Bearer token"

  try {
    // Decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decodedToken);
    // Find the user by ID
    const user = await User.findById(decodedToken._id);

    if (!user) {
      return res.status(404).json({ message: 'Could not find the user' });
    }

    const displayName = `${user.firstName} ${user.lastName}`;

    const userWithDisplayName = {
      ...user._doc,
      displayName
    };

    res.status(200).json(userWithDisplayName);
  } catch (error) {
    console.error('Error decoding token:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
