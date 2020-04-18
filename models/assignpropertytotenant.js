var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    tenantId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    unitId: {
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
module.exports = mongoose.model('assignpropertytotenant', dbSchema);