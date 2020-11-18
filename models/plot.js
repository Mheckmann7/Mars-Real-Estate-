const mongoose = require('mongoose');

const plotSchema = new mongoose.Schema({
    name: String,
    price: Number
}); 

module.exports = mongoose.model('Plot', plotSchema);