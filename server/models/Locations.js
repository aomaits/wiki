const mongoose = require('mongoose');

const { Schema } = mongoose;

// locations have a name, a description, and a type (village, city, wilderness, etc.)
const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    type: {
        type: String
    }
});

// Create a location model using the locationSchema
const Location = mongoose.model('Location', locationSchema);

// Export the Location model 
module.exports = Location;