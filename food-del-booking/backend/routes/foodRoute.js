const express = require('express');
const BookingController = require('../controllers/bookingController');

const router = express.Router();
const bookingController = new BookingController();

// Route to create a new booking
router.post('/book', bookingController.createBooking);

// Route to get all bookings
router.get('/bookings', bookingController.getAllBookings);

// Route to get a booking by ID
router.get('/book/:id', bookingController.getBookingById);

// Route to update a booking
router.put('/book/:id', bookingController.updateBooking);

// Route to delete a booking
router.delete('/book/:id', bookingController.deleteBooking);

module.exports = router;