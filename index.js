
const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route.js')
const app = express();
require('dotenv').config();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/products', productRoutes);

/**
 * //READ
app.get('/api/products/:id', async (req, res)=>{
    
});


//CREATE
app.post('/api/products', async (req, res) => {
    
});


//UPDATE
app.put('/api/products/:id', async (req, res)=>{
    
});


//DELETE
app.delete('/api/products/:id', async (req, res)=>{
    
});
*/


//Home Greetings...
app.get('/', (req, res)=>{
    res.send('hello from nodeapi')
});


mongoose.connect(process.env.url)
.then(() => {
    console.log('Connected to the database')
    app.listen(3000, ()=>{
        console.log("Server Started on localhost:3000")
    });
})
.catch(()=>{
    console.log('NOT CONNECTED!!!!')
});