const { AuthenticationError } = require("apollo-server-express");
const { Alcohol, Drink, Taco, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    drinks: async () => {
      return Drink.find();
    },
    users: async () => {
      return User.find();
    },
  },
};

module.exports = resolvers;
