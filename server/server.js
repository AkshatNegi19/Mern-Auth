import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = [
  "https://mern-auth-pi-woad.vercel.app",
  "http://localhost:5173"
];

app.use(express.json());
app.use(cookieParser());    
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// API Endpoints 
app.get("/",(req,res)=>res.send("API Working"));
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);

app.listen(port,()=> console.log(`Server started on PORT:${port}`));