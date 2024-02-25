const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.listen(3000, ()=>{
    console.log("Server Started on localhost:3000")
});

app.get('/', (req, res)=>{
    res.send('hello from nodeapi server testing ')
});


mongoose.connect("mongodb+srv://yourcare316:OK05rQM1HGOQqhfU@backenddatabase.thivddw.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDatabase")
.then(() => {
    console.log('Connected to the database')
})
.catch(()=>{
    console.log('NOT CONNECTED!!!!')
});