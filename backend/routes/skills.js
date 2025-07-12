const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const authMiddleware = require('../models/middleware/auth'); // ✅ updated path

router.post('/', authMiddleware, async (req, res) => {
  const { title, description, category, mode, type } = req.body;
  try {
    const newSkill = new Skill({
      title,
      description,
      category,
      mode,
      type,
      createdBy: req.user.id,
    });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to post skill', error: err.message });
  }
});

module.exports = router;
