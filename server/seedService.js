const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Agency = require('./models/Agency');
const Service = require('./models/Service');

dotenv.config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ewaste').then(async () => {
  try {
    const agency = await Agency.findOne();
    if (!agency) {
      console.log('No agency found to link the service to!');
      process.exit(1);
    }

    const service = await Service.create({
      agency: agency._id,
      serviceName: 'Premium Battery & Phone Recycling',
      description: 'We safely recycle old smartphones, laptops, and lithium-ion batteries. We provide secure data wiping.',
      acceptableWaste: ['Smartphones', 'Laptops', 'Batteries', 'Tablets'],
      serviceArea: 'Metropolitan Area',
      isApproved: true, // Auto-approved for testing
    });

    console.log('Dummy Service created and APPROVED!');
    console.log(service);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
