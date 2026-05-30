const Agency = require('../models/Agency');
const Service = require('../models/Service');
const User = require('../models/User');

// @desc    Get all unverified agencies
// @route   GET /api/admin/agencies/unverified
exports.getUnverifiedAgencies = async (req, res) => {
  try {
    const agencies = await Agency.find({ isVerified: false }).select('-password');
    res.json(agencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Verify an agency
// @route   PUT /api/admin/agencies/:id/verify
exports.verifyAgency = async (req, res) => {
  try {
    const agency = await Agency.findById(req.params.id);
    if (!agency) return res.status(404).json({ message: 'Agency not found' });

    agency.isVerified = true;
    await agency.save();
    res.json({ message: 'Agency verified successfully', agency });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all unapproved services
// @route   GET /api/admin/services/unapproved
exports.getUnapprovedServices = async (req, res) => {
  try {
    const services = await Service.find({ isApproved: false }).populate('agency', 'name email');
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve a service
// @route   PUT /api/admin/services/:id/approve
exports.approveService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    service.isApproved = true;
    await service.save();
    res.json({ message: 'Service approved successfully', service });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all agencies
// @route   GET /api/admin/agencies
exports.getAllAgencies = async (req, res) => {
  try {
    const agencies = await Agency.find().select('-password').lean();
    for (let agency of agencies) {
      agency.servicesCount = await Service.countDocuments({ agency: agency._id });
    }
    res.json(agencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an agency
// @route   DELETE /api/admin/agencies/:id
exports.deleteAgency = async (req, res) => {
  try {
    const agency = await Agency.findById(req.params.id);
    if (!agency) {
      return res.status(404).json({ message: 'Agency not found' });
    }

    // Optionally delete all services associated with the agency
    await Service.deleteMany({ agency: req.params.id });
    
    await agency.deleteOne();
    res.json({ message: 'Agency deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all services
// @route   GET /api/admin/services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate('agency', 'name email').lean();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' }).select('-password').lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
