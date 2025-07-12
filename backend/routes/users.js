const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../models/middleware/auth'); // ✅ updated path

router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } }).select(
      '-password'
    );
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch users', error: err.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch user', error: err.message });
  }
});

module.exports = router;
