const express = require('express');
const router = express.Router();
const { createService, getMyServices, getAgencyBookings, updateBookingStatus } = require('../controllers/agencyController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');

router.post('/services', protect, authorizeRole('agency'), createService);
router.get('/services', protect, authorizeRole('agency'), getMyServices);
router.get('/bookings', protect, authorizeRole('agency'), getAgencyBookings);
router.put('/bookings/:id', protect, authorizeRole('agency'), updateBookingStatus);

module.exports = router;
