import mongoose from "mongoose";
// ...existing code...
import express from 'express';
import { getFoods } from '../controllers/foodController.js';
const router = express.Router();
router.get('/', getFoods);

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error('MONGO_URI not set in .env');
      process.exit(1);
    }
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.