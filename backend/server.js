import 'dotenv/config';
import express from "express";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import bookingRouter from "./routes/bookingRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

// เสิร์ฟไฟล์รูปภาพจาก /uploads ผ่าน /images
app.use("/images", express.static(path.join(__dirname, "uploads")));

app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/booking", bookingRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));