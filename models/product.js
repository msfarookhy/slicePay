const mongoose = require('mongoose');
const product = new mongoose.Schema({
    Image: String,
    Name: String,
    size: String,
    price: Number
})


const Product = mongoose.model("Product", product);

module.exports = Product;