// ...existing code...
import Booking from '../models/bookingModel.js';

export const createBooking = async (req, res) => {
  console.log('CreateBooking body:', req.body);
  try {
    const booking = await Booking.create(req.body);
    console.log('Booking created:', booking);
    return res.status(201).json({ success: true, data: booking });
  } catch (err) {
    console.error('Create booking error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};

export default { createBooking };
// ...existing code...