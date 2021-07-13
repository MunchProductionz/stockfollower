const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const StockListSchema = new Schema({
    title: String,
    stocks: Array,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const StockList = mongoose.model('StockList', StockListSchema);

module.exports = StockList;