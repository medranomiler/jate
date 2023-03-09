const { Schema, model } = require('mongoose');

const alcoholSchema = new Schema({
    name: {
      type: String,
      required: 'You need to leave an Alcoholic beverage!',
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

const Alcohol = model('Alcohol', alcoholSchema);

module.exports = Alcohol;