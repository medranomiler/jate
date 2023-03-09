const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Taco {
    _id: ID
    name: String
    price: Int
  }

  type Drink {
    _id: ID
    name: String
    price: Int
  }

  type Alcohol {
    _id: ID
    name: String
    price: Int
  }

  type Query {
    tacos: [Taco]!
    taco(tacoId: ID!): Taco
    drinks: [Drink]!
    drink(drinkId: ID!): Drink
    alcohols: [Alcohol]!
    alcohol(alcoholId: ID!): Alcohol

  }

`;

module.exports = typeDefs;