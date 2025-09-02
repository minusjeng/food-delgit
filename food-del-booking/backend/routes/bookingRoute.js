import express from 'express';
import * as bookingController from '../controllers/bookingController.js';

const router = express.Router();

router.get('/tables', bookingController.getTables);
router.post('/reserve', bookingController.reserveTable);

export default router;