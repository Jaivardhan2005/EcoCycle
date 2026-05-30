const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Agency = require('../models/Agency');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check user or agency
      const user = await User.findById(decoded.id).select('-password');
      if (user) {
        req.user = user;
      } else {
        const agency = await Agency.findById(decoded.id).select('-password');
        if (agency) {
          req.user = agency; // attaching to req.user for consistency
        } else {
          return res.status(401).json({ message: 'Not authorized, token failed' });
        }
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
