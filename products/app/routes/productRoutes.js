const express = require("express");
const { getProduct, addProduct, getProducts } = require("../controllers/productController");
const router = express.Router();

router.get("/", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", addProduct);

module.exports = router;