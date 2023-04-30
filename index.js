require("dotenv").config();
const connect = require('./data/connection');
const port = process.env.PORT || 3000;
const express = require('express');
connect();
const app = express();

app.listen(port,()=>{
    console.log(`our application is running at port ${port}`)
})