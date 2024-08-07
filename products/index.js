const express = require("express");
const productRouter = require("./app/routes/productRoutes");
const connectDB = require("./config");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8082;

connectDB();

app.use(express.json());
app.use("/", productRouter)

app.listen(PORT, () => console.log(`Server for products running at http://localhost:${PORT}`));