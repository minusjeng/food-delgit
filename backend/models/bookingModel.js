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

// ให้ collection ชื่อ 'bookings' (หรือเปลี่ยนเป็น 'booking' ถ้าต้องการ)
export default mongoose.model('Booking', bookingSchema, 'bookings');