var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    },
    Timestamp: {
        type: Date, default: Date.now,
        required: true
    }
});


// Export the model
module.exports = mongoose.model('amenities', dbSchema);