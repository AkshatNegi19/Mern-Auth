# 🛡️ MERN Authentication System

A complete authentication system built using MongoDB, Express.js, React, and Node.js, featuring email verification, JWT authentication, password reset, and secure HTTP-only cookies.

<p align="center"> <img src="https://img.shields.io/badge/MERN-Stack-3FA34D?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/React-Vite-5A29E4?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Tailwind-CSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white" /> </p>

<h1>Table of Contents</h1>

**✨ Overview**  
**🚀 Features**  
**🏗️ Project Architecture**  
**💻 Tech Stack**  
**📂 Folder Structure**  
**🔐 Authentication Flow**  
**📡 API Endpoints**  
**🏁 Conclusion**
**📘 Ideal for**  

---

 <h1>Overview</h1>

This is a production-ready authentication system built using the MERN stack. It includes:

✅ User Registration  
✅ Login & Logout  
✅ Email Verification  
✅ Protected Routes  
✅ Forgot/Reset Password  
✅ JWT-based authentication (HTTP-only cookies)  
✅ Clean backend architecture (controllers, routes, middleware)  
✅ Modern React + TailwindCSS frontend

---

<h1>Features</h1>

**🔒 Authentication System**

- Register a new user  
- Secure login  
- Logout (cookie removal)  
- Email verification (mandatory)  
- Forgot password  
- Reset password via secure token

**🔒 Security Features**

- Password hashing (bcryptjs)  
- Encrypted JWT tokens  
- Secure HTTP-only cookies  
- Token expiration  
- Middleware-protected routes

**🎨 Frontend (React + Vite + Tailwind)**

- Modern UI  
- Toast alerts  
- Clean components  
- Axios API handling  
- Fully responsive

**⚙️ Backend (Node + Express)**

- MVC folder structure  
- Nodemailer email service  
- MongoDB + Mongoose  
- Token generation & validation  
- Centralized error handling

---

<h1>Project Architecture</h1>

## 1️⃣ Frontend – React + Vite + TailwindCSS

- Renders UI & pages  
- Handles forms: login, register, reset password  
- Sends API requests using Axios  
- Receives authentication cookies automatically  
- Shows toast messages to users  

## 2️⃣ Backend – Node.js + Express

- Handles all authentication logic  
- Verifies credentials  
- Generates JWT tokens  
- Stores JWT tokens inside HTTP-only cookies (more secure)  
- Sends verification and password reset emails  
- Contains middleware for protected routes  

## 3️⃣ Database – MongoDB + Mongoose

- Stores:  
  - User profiles  
  - Hashed passwords  
  - Email verification tokens  
  - Password reset tokens  
- Ensures database schema validation  

## 4️⃣ External Services

### 🔑 JSON Web Tokens (JWT)

- Creates secure sessions  
- Validates user identity  
- Used for login, verification, protected routes  

### 📧 Nodemailer

- Sends email verification links  
- Sends password reset links  
- Uses secure email service configuration  


<h1>Tech Stack</h1>

**Frontend**

- React  
- Vite  
- TailwindCSS  
- Axios

**Backend**

- Node.js  
- Express.js  
- Nodemailer

**Database**

- MongoDB  
- Mongoose

**Security**

- bcryptjs  
- JWT (HTTP-only cookies)

---

<h1>Folder Structure</h1>

# Client Side (React + Vite + TailwindCSS)

<img width="1027" height="451" alt="image" src="https://github.com/user-attachments/assets/2ce4bb79-0212-432b-8d06-d662c331f797" />


# Server Side (Node.js + Express)

<img width="938" height="688" alt="image" src="https://github.com/user-attachments/assets/058a3e3b-729a-4de3-a731-c02473609ae5" />


<h1>Authentication Flow </h1>

1️⃣ **User Registers**

```bash
git clone https://github.com/your-username/mern-auth.git
cd mern-auth
```

2️⃣ **Install Frontend**

```bash
cd ../client
npm install
npm run dev

```


<h1>API Endpoints</h1>

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>POST</strong></td>
      <td>/api/auth/register</td>
      <td>Register user + send verification</td>
    </tr>
    <tr>
      <td><strong>GET</strong></td>
      <td>/api/auth/verify/:token</td>
      <td>Verify email</td>
    </tr>
    <tr>
      <td><strong>POST</strong></td>
      <td>/api/auth/login</td>
      <td>Login</td>
    </tr>
    <tr>
      <td><strong>GET</strong></td>
      <td>/api/auth/user</td>
      <td>Get logged-in user</td>
    </tr>
    <tr>
      <td><strong>GET</strong></td>
      <td>/api/auth/logout</td>
      <td>Logout</td>
    </tr>
    <tr>
      <td><strong>POST</strong></td>
      <td>/api/auth/forgot-password</td>
      <td>Send reset link</td>
    </tr>
    <tr>
      <td><strong>POST</strong></td>
      <td>/api/auth/reset-password/:token</td>
      <td>Reset password</td>
    </tr>
  </tbody>
</table>

<h2>Conclusion</h2>

This project provides a comprehensive implementation of user authentication features using the MERN stack, including registration, email verification, login, password reset, and security best practices. Feel free to customize, extend, and integrate this setup into your own applications to build secure and scalable authentication systems.

<h2>Ideal For</h2>

**This project is ideal for:**
- Beginners learning MERN stack development and authentication workflows
- Developers seeking a boilerplate for user authentication with email verification and password reset
- Projects requiring secure user management and user account activation
- Anyone interested in implementing JWT-based authentication in a React + Node.js application
