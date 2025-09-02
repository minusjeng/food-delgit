const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  isAvailable: { type: Boolean, default: true },
  reservedBy: { type: String }, // หรือ userId ถ้ามีระบบ login
});

module.exports = mongoose.model('Table', tableSchema);