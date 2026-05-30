const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// Load env vars
dotenv.config({ path: '../.env' }); // Ensure it loads from root directory

// Connect to DB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ewaste').then(() => {
  console.log('MongoDB Connected');
}).catch(err => {
  console.error('Connection error', err);
});

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@ecocycle.com' });
    if (adminExists) {
      console.log('Admin already exists! You can log in with:');
      console.log('Email: admin@ecocycle.com');
      console.log('Password: adminpassword');
      process.exit(0);
    }

    const admin = await User.create({
      name: 'System Admin',
      email: 'admin@ecocycle.com',
      password: 'adminpassword', // Will be hashed automatically by the model
      role: 'admin',
    });

    console.log('\n--- Admin created successfully! ---');
    console.log('Email: admin@ecocycle.com');
    console.log('Password: adminpassword');
    console.log('-----------------------------------');
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
