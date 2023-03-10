const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Taco {
    _id: ID
    name: String
    price: Float
  }

  type Drink {
    _id: ID
    name: String
    price: Float
  }

  type Alcohol {
    _id: ID
    name: String
    price: Float
  }

  type Query {
    users: [User]
    tacos: [Taco]!
    taco(tacoId: ID!): Taco
    drinks: [Drink]!
    drink(drinkId: ID!): Drink
    alcohols: [Alcohol]!
    alcohol(alcoholId: ID!): Alcohol
  }
`;

module.exports = typeDefs;
