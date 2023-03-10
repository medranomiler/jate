const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    tacos: [Taco]!
    taco(tacoId: ID!): Taco
    drinks: [Drink]!
    drink(drinkId: ID!): Drink
    alcohols: [Alcohol]!
    alcohol(alcoholId: ID!): Alcohol

  }
type Mutation {
  addTaco(name: String!, price: Float): Taco
  addDrink(name: String!, price: Float): Drink
  addAlcohol(name: String!, price: Float): Alcohol
  addUser(username: String!, email: String!, password: String!): Auth


}
`;

module.exports = typeDefs;