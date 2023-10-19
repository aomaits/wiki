const { AuthenticationError } = require('apollo-server-express');
const {  } = require('../models');

const resolvers = {
    Query: {
        // villager: async (parent, { _id }) => {
        //     return await Villager.findById(_id).populate('requests').populate('village');
        // },
        // villagers: async () => {
        //     return await Villager.find();
        // },
        // village: async (parent, { _id }) => {
        //     return await Village.findById(_id).populate('villagers').populate('admin');
        // },
        // villages: async () => {
        //     return await Village.find().populate('villagers').populate('admin');
        // },
        // requests: async () => {
        //     return await Request.find().populate('authorId').populate({
        //         path: 'response',
        //         populate: 'claimId'
        //     });
        // },
        // request: async (parent, { _id }) => {
        //     return await Request.findById(_id).populate('authorId').populate({
        //         path: 'response',
        //         populate: 'claimId'
        //     });
        // },
        // comment: async (parent, { _id }) => {
        //     return await Comment.findById(_id).populate('authorId').populate('requestId');
        // },
        // comments: async () => {
        //     return await Comment.find().populate('authorId').populate('requestId');
        // }
    },
    Mutation: {
    },
}

module.exports = resolvers;