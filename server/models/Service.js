const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  acceptableWaste: [{
    type: String, // e.g., 'Batteries', 'Laptops', 'Mobiles'
    required: true,
  }],
  serviceArea: {
    type: String, // e.g., 'City Center', 'North Zone'
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false, // Must be approved by admin
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Service', serviceSchema);
