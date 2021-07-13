const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const StockSchema = new Schema({
    title: String,
    price: Number,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;