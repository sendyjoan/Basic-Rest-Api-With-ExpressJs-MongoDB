require("dotenv").config();
const connect = require('./data/connection');
const cors = require('cors');
const routes = require('./routes/routes');
const port = process.env.PORT || 3000;
const express = require('express');
connect();
const app = express();

app.use(express.json());
app.use('/', routes);
app.use(cors());

app.listen(port,()=>{
    console.log(`our application is running at port ${port}`)
})