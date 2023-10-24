const mongoose = require('mongoose');

const { Schema } = mongoose;

// character field allows us to assign an item to a character
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    characterId: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    }
});

// Create an Item model using the itemSchema
const Item = mongoose.model('Item', itemSchema);

// Export the Item model 
module.exports = Item;