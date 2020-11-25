const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
      address: String,
      bedrooms: Number,
      bathrooms: String, 
      addons: {
        type: String,
        enum: ['Green house', 'View']
      },
      price: Number

})

const plotSchema = new mongoose.Schema({
    img: String,
    size: { 
      type: String,
      enum: ['Small', 'Medium', 'Large']
    }, 
    price: {
      type: Number,
      min: 0
    },
    type: {
      type: String,
      enum: ['Plot', 'House']
    },
    house: [houseSchema]

}, {timestamps: true}); 



function getOne(id) {
  return todos[id];
}

function updateOne(todo, id) {
  todos.splice(id,1,todo); 
}

module.exports = mongoose.model('Plot', plotSchema);

