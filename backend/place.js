const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./backend/schema'); 

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("Connected to MongoDB Atlas");

  const users = [
    {
      name: 'hrishob',
      email: 'hrishob@example.com',
      password: 'Diamond123',
      age: 17,
      address: 'Demon Street 666, Hell Town',
      phoneNumber: '9999999999',
      role: 'admin',
      lastLogin: new Date()
    },
    {
      name: 'Kanchu',
      email: 'kanchu@example.com',
      password: 'smilequeen123',
      age: 19,
      address: 'Sunflower Lane, Happy Town',
      phoneNumber: '8888888888',
      role: 'user'
    },
    {
      name: 'balagiri',
      email: 'bala@onepiece.com',
      password: 'meatlover123',
      age: 18,
      address: 'Sunny Ship, Grand Line',
      phoneNumber: '7777777777',
      role: 'user'
    }
  ];

  try {
    await User.insertMany(users);
    console.log('🌟 Sample users inserted successfully!');
  } catch (error) {
    console.error('❌ Error inserting users:', error.message);
  } finally {
    mongoose.disconnect();
  }

}).catch(err => console.error("MongoDB connection error:", err));