import Booking from '../models/bookingModel.js';

export const getTables = async (req, res) => {
  return res.json({ success: true, tables: [] });
};

export const reserveTable = async (req, res) => {
  console.log('reserveTable body:', req.body);
  try {
    const booking = await Booking.create(req.body);
    console.log('Booking created:', booking);
    return res.status(201).json({ success: true, data: booking });
  } catch (err) {
    console.error('reserveTable error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};