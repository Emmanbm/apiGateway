// import mongoose from "mongoose";
// import dotenv from "dotenv";

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };