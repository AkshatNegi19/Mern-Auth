import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

// Allowed origins
const allowedOrigins = [
  "https://mern-auth-eosin-sigma.vercel.app",
  "http://localhost:5173"
];

// Middleware
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // explicitly allow methods
}));

app.use(express.json());
app.use(cookieParser());

// API Endpoints 
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
