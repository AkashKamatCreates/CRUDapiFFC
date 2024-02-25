const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Server Started on localhost:3000")
});

app.get('/', (req, res)=>{
    res.send('hello from nodeapi')
});