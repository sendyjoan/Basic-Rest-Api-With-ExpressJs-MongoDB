const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {required:true, type:String},
    age: {required:true, type:String}
})
module.exports = mongoose.model('Student', schema);