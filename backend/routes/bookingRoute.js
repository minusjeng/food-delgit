import express from 'express';
import { getTables, reserveTable } from '../controllers/bookingController.js';

const router = express.Router();

router.get('/tables', getTables);
router.post('/reserve', reserveTable);

export default router;