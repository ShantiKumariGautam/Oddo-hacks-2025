const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const skillRoutes = require('./routes/skills');
const userRoutes = require('./routes/users');
const requestRoutes = require('./routes/requests'); // 👈 new line

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes); // 👈 new line

module.exports = app;
