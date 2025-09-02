const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoute');

dotenv.config();
require('dotenv').config(); // <-- ต้องอยู่บนสุดก่อนเรียก config/db
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

console.log('MONGO_URI set?', !!process.env.MONGO_URI);
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));
const bookingRoute = require('./routes/bookingRoute');
app.use('/api/booking', bookingRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/bookings', bookingRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});