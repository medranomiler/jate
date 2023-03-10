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
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    tacos: [Taco]!
    taco(tacoId: ID!): Taco
    drinks: [Drink]!
    drink(drinkId: ID!): Drink
    alcohols: [Alcohol]!
    alcohol(alcoholId: ID!): Alcohol
    users: [User]

  }
type Mutation {
  addTaco(name: String!, price: Float): Taco
  addDrink(name: String!, price: Float): Drink
  addAlcohol(name: String!, price: Float): Alcohol
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth


}
`;

module.exports = typeDefs;
