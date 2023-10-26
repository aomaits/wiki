const mongoose = require('mongoose');

const { Schema } = mongoose;

// 
const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    nickname: {
        type: String,
    },
    race: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    height: {
        type: String,
    },
    weight: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    alignment: {
        type: String,
        required: true,
    },
    itemsId: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
    }
});

// Create a character model using the characterSchema
const Character = mongoose.model('Character', characterSchema);

// Export the Character model 
module.exports = Character;