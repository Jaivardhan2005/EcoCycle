const Service = require('../models/Service');
const Booking = require('../models/Booking');

// @desc    Create a new service
// @route   POST /api/agency/services
exports.createService = async (req, res) => {
  const { serviceName, description, acceptableWaste, serviceArea } = req.body;
  try {
    if (!req.user.isVerified) {
      return res.status(403).json({ message: 'Agency is not verified by admin yet' });
    }

    const service = await Service.create({
      agency: req.user._id,
      serviceName,
      description,
      acceptableWaste,
      serviceArea,
      isApproved: false, // Requires admin approval
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get agency's own services
// @route   GET /api/agency/services
exports.getMyServices = async (req, res) => {
  try {
    const services = await Service.find({ agency: req.user._id });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get bookings for agency's services
// @route   GET /api/agency/bookings
exports.getAgencyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ agency: req.user._id })
      .populate('user', 'name email')
      .populate('service', 'serviceName');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/agency/bookings/:id
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.agency.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this booking' });
    }

    booking.status = req.body.status || booking.status;
    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
