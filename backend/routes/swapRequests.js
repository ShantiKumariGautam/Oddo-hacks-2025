const express = require('express');
const router = express.Router();
const SwapRequest = require('../models/SwapRequest');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { toUser, fromSkill, toSkill, message } = req.body;

  try {
    const newRequest = new SwapRequest({
      fromUser: req.user.id,
      toUser,
      fromSkill,
      toSkill,
      message,
    });

    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to create swap request', error: err.message });
  }
});

router.get('/received', authMiddleware, async (req, res) => {
  try {
    const requests = await SwapRequest.find({ toUser: req.user.id })
      .populate('fromUser', '-password')
      .populate('fromSkill')
      .populate('toSkill');
    res.status(200).json(requests);
  } catch (err) {
    res
      .status(500)
      .json({
        message: 'Failed to fetch received requests',
        error: err.message,
      });
  }
});

router.get('/sent', authMiddleware, async (req, res) => {
  try {
    const requests = await SwapRequest.find({ fromUser: req.user.id })
      .populate('toUser', '-password')
      .populate('fromSkill')
      .populate('toSkill');
    res.status(200).json(requests);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch sent requests', error: err.message });
  }
});

module.exports = router;
