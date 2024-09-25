const mongoose = require('mongoose');

const paletteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  colors: { type: [String], required: true },
  likes: { type: Number, default: 0 },
  createdBy: { type: String, required: true } 
});

module.exports = mongoose.model('Palette', paletteSchema);
