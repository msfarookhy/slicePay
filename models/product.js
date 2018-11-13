const mongoose = require('mongoose');
const product = new mongoose.Schema({
    Image: String,
    Name: String,
    quantity: Number,
    price: Number
})


const Product = mongoose.model("Product", product);

module.exports = Product;