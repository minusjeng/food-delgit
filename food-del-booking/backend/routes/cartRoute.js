const express = require('express');
const CartController = require('../controllers/cartController');

const router = express.Router();
const cartController = new CartController();

// Route to add an item to the cart
router.post('/add', cartController.addItem);

// Route to remove an item from the cart
router.delete('/remove/:id', cartController.removeItem);

// Route to get all items in the cart
router.get('/', cartController.getCartItems);

// Route to clear the cart
router.delete('/clear', cartController.clearCart);

module.exports = router;