require("dotenv").config();
const mongoose = require('mongoose');
const db_url = process.env.DB_URL;
const connect = function(){
    mongoose.set("strictQuery", false);
    mongoose.connect(db_url).then((val) => {
        console.log('DB Connected!');
    }).catch((err) => {
        console.log('Error Connection', err);
    });
}
module.exports=connect;