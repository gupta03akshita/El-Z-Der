// server.js
import express from 'express';
import 'cookie-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
import cors from 'cors';

const userRoutes = require('./routes/user.router'); // Import user routes

// cors origining
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}))

// generic middlewares
app.use(bodyparser.json({ limit: "4kb" }));
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());

const PORT = process.env.PORT

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies


// Use user routes
app.use('/api', userRoutes); // All routes in userRoutes will be prefixed with /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
