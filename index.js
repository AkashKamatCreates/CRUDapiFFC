const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("hello akash")
});

app.get('/', (req, res)=>{
    res.send('hello from nodeapi')
});