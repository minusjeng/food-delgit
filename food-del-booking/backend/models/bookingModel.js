// ...existing code...
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String },
  guests: { type: Number, default: 1 },
  notes: { type: String },
  status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' }
}, { timestamps: true });

// third param forces collection name in Atlas (use 'booking' or 'bookings' as you prefer)
export default mongoose.model('Booking', bookingSchema, 'booking');
// ...existing code...