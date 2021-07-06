const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;   // Åpne env på server, 8080 kan være opptatt

const routes = require('./routes/api');


// MongoDB
mongoose.connect('mongodb://localhost/afdev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});


// Data parsing
// Recieves JSON and makes it available from the request of the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));




// Connection string
// const MONGODB_URI = 'mongodb+srv://henrik:Sommer2021@afdevdb.nxmru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


// Dummy data

// Saving data to our mongo database
// const data = {
//     title: 'Welcome to my Youtube Channel',
//     body: 'I help folks.'
// };


// const newBlogPost = new BlogPost(data); // instance of the model

// newBlogPost.save((error) => {                          
//     if (error) {
//         console.log('Ooops, something happened');
//     } else {
//         console.log('Data has been saved!');
//     }
// });
// .save();