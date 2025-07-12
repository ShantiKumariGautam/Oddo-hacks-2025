const express = require('express');
const router = express.Router();
const SwapRequest = require('../models/SwapRequest');
const authMiddleware = require('../models/middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { toUser, offeredSkill, requestedSkill, message } = req.body;

  try {
    const newRequest = new SwapRequest({
      fromUser: req.user.id,
      toUser,
      offeredSkill,
      requestedSkill,
      message,
    });

    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to create request', error: err.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await SwapRequest.find({
      $or: [{ fromUser: userId }, { toUser: userId }],
    })
      .populate('fromUser', 'name email role')
      .populate('toUser', 'name email role');

    res.status(200).json(requests);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch requests', error: err.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const request = await SwapRequest.findById(req.params.id)
      .populate('fromUser', 'name email role')
      .populate('toUser', 'name email role');

    if (!request) {
      return res.status(404).json({ message: 'Swap request not found' });
    }

    res.status(200).json(request);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch request', error: err.message });
  }
});

router.patch('/:id/status', authMiddleware, async (req, res) => {
  const { status } = req.body;

  if (!['pending', 'accepted', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  try {
    const updatedRequest = await SwapRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: 'Swap request not found' });
    }

    res.status(200).json(updatedRequest);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to update status', error: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedRequest = await SwapRequest.findByIdAndDelete(req.params.id);

    if (!deletedRequest) {
      return res.status(404).json({ message: 'Swap request not found' });
    }

    res.status(200).json({ message: 'Swap request deleted successfully' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to delete request', error: err.message });
  }
});

module.exports = router;
