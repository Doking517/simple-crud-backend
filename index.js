const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});


//connection to the database
mongoose.connect("mongodb+srv://tsemojust:2R3QFJeeyYjG8NTS@backenddb.m9quisa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("connected to database");
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("connection failed!")
    })