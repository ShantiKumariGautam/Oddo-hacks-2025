const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    mode: {
      type: String,
      enum: ['online', 'offline'],
      default: 'online',
    },
    type: {
      type: String,
      enum: ['teach', 'learn'],
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', SkillSchema);
