const express = require('express');
const router = express.Router();
const { getUnverifiedAgencies, verifyAgency, getUnapprovedServices, approveService, getAllAgencies, getAllServices, getAllUsers, deleteAgency } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');

router.get('/agencies', protect, authorizeRole('admin'), getAllAgencies);
router.get('/agencies/unverified', protect, authorizeRole('admin'), getUnverifiedAgencies);
router.put('/agencies/:id/verify', protect, authorizeRole('admin'), verifyAgency);
router.delete('/agencies/:id', protect, authorizeRole('admin'), deleteAgency);

router.get('/services', protect, authorizeRole('admin'), getAllServices);
router.get('/services/unapproved', protect, authorizeRole('admin'), getUnapprovedServices);
router.put('/services/:id/approve', protect, authorizeRole('admin'), approveService);

router.get('/users', protect, authorizeRole('admin'), getAllUsers);

module.exports = router;
