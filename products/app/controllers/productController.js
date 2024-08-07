const Product = require("../models/Product");

const getProducts = async (_, res) => {
    try {
        const products = await Product.find({}, { __v: 0 });
        if (!products) return res.status(404).json({ message: "Aucun produit n'a été trouvé" });
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal server error: ${error}` });
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params?.id);
        if (!product) return res.status(404).json({ message: "Aucun produit n'a été trouvé" });
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal server error: ${error}` });
    }
}

const addProduct = async (req, res) => {
    try {
        const { price, name } = req.body;
        const newProduct = new Product({ price, name });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal server error: ${error}` });
    }
}

module.exports = { getProducts, getProduct, addProduct };