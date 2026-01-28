import express from "express";

import {
  register,
  login,
  logout,
  isAuthenticated,
  sendVerifyOtp,
  verifyEmail,
  sendResetOtp,
  resetPassword,
  verifyResetOtp,
} from "../controllers/authController.js";

import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

// Auth
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

// Account verification
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.post("/is-auth", userAuth, isAuthenticated);

// Password reset
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/verify-reset-otp", verifyResetOtp);

export default authRouter;
