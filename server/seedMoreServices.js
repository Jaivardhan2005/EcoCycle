const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Agency = require('./models/Agency');
const Service = require('./models/Service');

dotenv.config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ewaste').then(async () => {
  try {
    const agency = await Agency.findOne();
    if (!agency) {
      console.log('No agency found!');
      process.exit(1);
    }

    const services = [
      {
        agency: agency._id,
        serviceName: 'Home Appliance E-Waste Pickup',
        description: 'Free doorstep pickup for old TVs, refrigerators, washing machines, and air conditioners. Safe disposal guaranteed.',
        acceptableWaste: ['TVs', 'Refrigerators', 'Washing Machines', 'Air Conditioners'],
        serviceArea: 'North Zone',
        isApproved: true,
      },
      {
        agency: agency._id,
        serviceName: 'Computer & IT Equipment Recycling',
        description: 'Certified ITAD (IT Asset Disposition) service for businesses and individuals. Secure data destruction included.',
        acceptableWaste: ['Desktops', 'Laptops', 'Monitors', 'Printers', 'Hard Drives'],
        serviceArea: 'City Center',
        isApproved: true,
      },
      {
        agency: agency._id,
        serviceName: 'Small Gadgets Collection Drive',
        description: 'Drop off your old chargers, cables, earphones, and small electronics at our collection points every weekend.',
        acceptableWaste: ['Chargers', 'Cables', 'Earphones', 'Smartwatches', 'Remote Controls'],
        serviceArea: 'South District',
        isApproved: true,
      },
    ];

    await Service.insertMany(services);
    console.log(`${services.length} more services seeded successfully!`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
