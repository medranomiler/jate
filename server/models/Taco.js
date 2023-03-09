const { Schema, model } = require('mongoose');

const tacoSchema = new Schema({
    name: {
      type: String,
      required: 'You need to leave a taco!',
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
})

const Taco = model('Taco', tacoSchema);

module.exports = Taco;