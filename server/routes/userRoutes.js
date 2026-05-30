const express = require('express');
const router = express.Router();
const { getApprovedServices, bookService, getMyBookings } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');

router.get('/services', protect, authorizeRole('user'), getApprovedServices);
router.post('/book', protect, authorizeRole('user'), bookService);
router.get('/bookings', protect, authorizeRole('user'), getMyBookings);

module.exports = router;
