const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
    name: {
      type: String,
      required: 'You need to leave a drink!',
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

const Drink = model('Drink', drinkSchema);

module.exports = Drink;