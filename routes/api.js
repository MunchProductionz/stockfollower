const express = require('express');

const router = express.Router();

const Stock = require('../models/stock');


// Routes
router.get('/', (req, res) => {

    Stock.find({ })                              // Finds all data from db
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);                         // Writes data to server
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newStock = new Stock(data);

    newStock.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors'});
            return;
        }

        // Stock
        res.json({
            msg: 'Your data has been saved!'
        });
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'henriksen',
        age: 5
    };
    res.json(data);
});


module.exports = router;