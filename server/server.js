import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoute.js";
import connectDB from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Allowed origins
const allowedOrigins = [
  "https://mern-auth-eosin-sigma.vercel.app", // your deployed frontend
  "http://localhost:5173" // local frontend
];

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS setup
app.use(cors({
  origin: allowedOrigins,
  credentials: true,              // allow cookies
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // allowed headers
}));

// Handle preflight requests for all routes
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Routes
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
