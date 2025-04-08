const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true }, 
    isActive: { type: Boolean, default: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    lastLogin: { type: Date }
});


const User = mongoose.model('User', userSchema);
module.exports = User;