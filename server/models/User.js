const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  palettes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Palette' }]
});

module.exports = mongoose.model('User', userSchema);
