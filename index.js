const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model');
const app = express();
app.use(express.json());

//READ
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500),json({message:error.message});
    }
});

app.get('/getbyid/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500),json({message:error.message});
    }
});


//CREATE
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500),json({message:error.message});
    }
});


//UPDATE
app.put('/updatebyid/:id', async (req, res)=>{
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product){
            return res.status(404).json({message: "Product not found!"});
        }

        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500),json({message:error.message});
    }
});


//DELETE
app.delete('/deletebyid/:id', async (req, res)=>{
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);
        
        if(!product){
            return res.status(404).json({message: "Product not found!"});
        }

        const updatedproduct = await Product.findById(id);
        res.status(200).json({message: "Product Deleted"});
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