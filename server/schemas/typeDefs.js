const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Taco {
    _id: ID
    name: String
    price: Number
  }

  type Drink {
    _id: ID
    name: String
    price: Number
  }

  type Alochol {
    _id: ID
    name: String
    price: Number
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