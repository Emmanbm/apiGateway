const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

const proxy = require("express-http-proxy");
const adminMiddleware = require("./app/middlewares/adminMiddlewares");

app.use("/api/auth", proxy("http://auth:8081"));
app.use("/api/products", adminMiddleware, proxy("http://products:8082"));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
