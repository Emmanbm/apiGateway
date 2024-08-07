const { connectDB } = require("./config/db");
const express = require("express");
const app = express();

const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
dotenv.config();
const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || "localhost";

connectDB();

app.use(express.json());
app.use("/", authRouter);

app.listen(PORT, () => console.log(`Listening on http://${HOST}:${PORT}`))
