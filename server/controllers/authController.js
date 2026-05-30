const User = require('../models/User');
const Agency = require('../models/Agency');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register-user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, role: 'user' });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Register an agency
// @route   POST /api/auth/register-agency
exports.registerAgency = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const agencyExists = await Agency.findOne({ email });
    if (agencyExists) return res.status(400).json({ message: 'Agency already exists' });

    const agency = await Agency.create({ name, email, password, role: 'agency' });
    if (agency) {
      res.status(201).json({
        _id: agency._id,
        name: agency.name,
        email: agency.email,
        role: agency.role,
        isVerified: agency.isVerified,
        token: generateToken(agency._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid agency data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user or agency (or admin)
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password, type } = req.body; // type: 'user' | 'agency' | 'admin'
  try {
    let account;
    if (type === 'agency') {
      account = await Agency.findOne({ email });
    } else {
      account = await User.findOne({ email });
    }

    if (account && (await account.matchPassword(password))) {
      // Admins are technically users with role='admin'
      if (type === 'admin' && account.role !== 'admin') {
         return res.status(401).json({ message: 'Not authorized as admin' });
      }

      res.json({
        _id: account._id,
        name: account.name,
        email: account.email,
        role: account.role,
        isVerified: account.isVerified, // Only for agencies
        token: generateToken(account._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
