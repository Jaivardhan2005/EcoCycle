const Service = require('../models/Service');
const Booking = require('../models/Booking');

// @desc    Get all approved services
// @route   GET /api/user/services
exports.getApprovedServices = async (req, res) => {
  try {
    const services = await Service.find({ isApproved: true }).populate('agency', 'name email');
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Book a service
// @route   POST /api/user/book
exports.bookService = async (req, res) => {
  const { serviceId, collectionDate, notes } = req.body;
  try {
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    if (!service.isApproved) return res.status(400).json({ message: 'Service is not approved yet' });

    const booking = await Booking.create({
      user: req.user._id,
      service: serviceId,
      agency: service.agency,
      collectionDate,
      notes,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my bookings
// @route   GET /api/user/bookings
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('service', 'serviceName description')
      .populate('agency', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
