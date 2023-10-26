const { AuthenticationError } = require('apollo-server-express');
const { Characters, Items, Locations } = require('../models');

const resolvers = {
    Query: {
        characters: async () => {
            try {
                const characters = await Characters.find().populate('itemsId');
                console.log(characters.map(character => character.itemsId)); // Add this line for debugging
                return characters;
            } catch (error) {
                console.error(error); // Log any errors
                throw error;
            }
        },
        items: async () => {
            return await Items.find();
        },
        locations: async () => {
            return await Locations.find();
        },
    },  
};

module.exports = resolvers;
