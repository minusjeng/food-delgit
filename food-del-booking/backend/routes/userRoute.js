const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const userController = new UserController();

// Route to create a new booking
router.post('/bookings', userController.createBooking);

// Route to get all bookings
router.get('/bookings', userController.getAllBookings);

// Route to get a specific booking by ID
router.get('/bookings/:id', userController.getBookingById);

// Route to update a booking by ID
router.put('/bookings/:id', userController.updateBooking);

// Route to delete a booking by ID
router.delete('/bookings/:id', userController.deleteBooking);

module.exports = router;