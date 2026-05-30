const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ewaste').then(async () => {
  const services = await Service.find({});
  console.log(`Total services in DB: ${services.length}`);
  if (services.length > 0) {
    console.log(services);
  }
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
