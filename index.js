const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model');
const app = express();
app.use(express.json());


app.post('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500),json({message:error.message});
    }
});



app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500),json({message:error.message});
    }
});





app.get('/', (req, res)=>{
    res.send('hello from nodeapi')
});


mongoose.connect("mongodb+srv://yourcare316:OK05rQM1HGOQqhfU@backenddatabase.thivddw.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDatabase")
.then(() => {
    console.log('Connected to the database')
    app.listen(3000, ()=>{
        console.log("Server Started on localhost:3000")
    });
})
.catch(()=>{
    console.log('NOT CONNECTED!!!!')
});