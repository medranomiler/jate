const { AuthenticationError } = require("apollo-server-express");
const { Alcohol, Drink, Taco } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        drinks: async () => {
            return Drink.find();
        },
        alcohols: async () => {
            return Alcohol.find();
        },
        tacos: async () => {
            return Taco.find();
        },
        drink: async (parent, { drinkId }) => {
            return Drink.findOne({ _id: drinkId })
        },
        alcohol: async (parent, { alcoholId }) => {
            return Alcohol.findOne({ _id: alcoholId })
        },
        taco: async (parent, { tacoId }) => {
            return Taco.findOne({ _id: tacoId })
        },
    },


    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        // addTaco: async (parent, args, context) => {
        //     if (context.user) {
        //       const taco = await Taco.create({
        //         name: args.name,
        //         price: args.price

        //       });

        //       await User.findOneAndUpdate(
        //         { _id: context.user._id },
        //         { $addToSet: { thoughts: thought._id } }
        //       );

        //       return thought;
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        //   },
        addTaco: async (parent, args, context) => {
            
            const taco = await Taco.create({
                name: args.name,
                price: args.price

            });
            return taco;
        
    },
    addDrink: async (parent, args, context) => {
            
        const drink = await Drink.create({
            name: args.name,
            price: args.price

        });
        return drink;
    
},
addAlcohol: async (parent, args, context) => {
            
    const alcohol = await Alcohol.create({
        name: args.name,
        price: args.price

    });
    return alcohol;

},
    }
}
module.exports = resolvers;
