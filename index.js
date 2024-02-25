const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route.js')
const app = express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/products', productRoutes);

//READ
app.get('/api/products/:id', async (req, res)=>{
    
});


//CREATE
app.post('/api/products', async (req, res) => {
    
});


//UPDATE
app.put('/api/products/:id', async (req, res)=>{
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
app.delete('/api/products/:id', async (req, res)=>{
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

//Home Greetings...
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