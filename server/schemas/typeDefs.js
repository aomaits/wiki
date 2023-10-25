const { gql } = require('apollo-server-express');

// GraphQL schemas, queries, and mutations
const typeDefs = gql`
    type Character {
        _id: ID
        name: String
        nickname: String
        race: String
        gender: String
        age: Int
        height: String
        weight: String
        description: String
        alignment: String
        items: [Items]
    }

    type Item {
        _id: ID
        name: String
        description: String
        characterId: [Characters]
    }

    type Location {
        _id: ID
        name: String
        description: String
        type: String
    }
`;

module.exports = typeDefs;