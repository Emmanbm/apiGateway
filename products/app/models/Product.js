const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    price: { type: Number, },
    name: { type: String }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;