const db = require('../config/connection');
const { Taco, Drink, Alcohol } = require('../models');
const tacoSeeds = require('./tacos.json');
const drinkSeeds = require('./drinks.json');
const alcoholSeeds = require('./alcohol.json');

db.once('open', async () => {
  await Taco.deleteMany({});
  await Taco.create(tacoSeeds);
  await Drink.deleteMany({});
  await Drink.create(drinkSeeds);
  await Alcohol.deleteMany({});
  await Alcohol.create(alcoholSeeds);

  console.log('all done!');
  process.exit(0);
});