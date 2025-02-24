const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: [String], default: [] },
  age: { type: Number, required: true },
  isVerified: { type: Boolean, default: false },
  profilePicture: { type: String, default: "" }, 
  phoneNumber: { type: String, unique: true, sparse: true }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);