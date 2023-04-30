const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {required:true, type:String},
    age: {required:false, type:String}
})
module.exports = mongoose.model('Student', schema);