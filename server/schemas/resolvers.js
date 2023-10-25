const { AuthenticationError } = require('apollo-server-express');
const { Characters, Items, Locations } = require('../models');

const resolvers = {
    Query: {
        characters: async () => {
            return await Characters.find();
        },
        items: async () => {
            return await Items.find().populate('characterId');
        },
        locations: async () => {
            return await Locations.find();
        },
    },
}

module.exports = resolvers;