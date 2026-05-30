const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/User');
const Agency = require('./models/Agency');
const Service = require('./models/Service');
const Booking = require('./models/Booking');
// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/agency', require('./routes/agencyRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Public Stats Route
app.get('/api/stats', async (req, res) => {
  try {
    const agencies = await Agency.countDocuments({ isVerified: true });
    const users = await User.countDocuments({ role: 'user' });
    const services = await Service.countDocuments({ isApproved: true });
    const collected = await Booking.countDocuments({ status: 'collected' });
    res.json({ agencies, users, services, collected });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stats' });
  }
});

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
