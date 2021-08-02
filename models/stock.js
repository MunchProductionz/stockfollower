const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const StockSchema = new Schema({
    ticker: {type: String, required: true},
    price: Number
});

// Model
const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;