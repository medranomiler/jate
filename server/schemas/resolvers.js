const { AuthenticationError } = require('apollo-server-express');
const { Alcohol, Drink, Taco } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        drinks: async () => {
            return Drink.find();
        }
    }
}

module.exports = resolvers;
