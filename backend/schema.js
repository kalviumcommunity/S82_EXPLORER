const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true }, // You can rename this to something more fitting for a place if needed
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  createdAt: { type: Date, default: Date.now }
});

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = PlaceModel;
