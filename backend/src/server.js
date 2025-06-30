import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // This middleware will parse JSON bodies: req.body
app.use(rateLimiter); // Apply rate limiting middleware

// app.use((req,res,next) => {
// console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
// next(); // pass control to the next middleware function
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server is running on port:", PORT);
  });
});
