const mongoose = require('mongoose');

const plotSchema = new mongoose.Schema({
    img: String,
    location: String, 
    price: Number
}); 

module.exports = mongoose.model('Plot', plotSchema);