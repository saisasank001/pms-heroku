
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      ownerId: {
        type: String,
        required: true    },

        propertyId: {
        type: String,
        required: true    },

        unitId: {
        type: String,
        required: true    },

        isAvailable: {
        type: String,
        required: true    },

        createdAt:{
        type:String,
        required:false
    },
    updatedAt:{
        type:String,
        required:false
    },
    Timestamp: {
        type: Date, 
        default: Date.now,
        required: true
    } 
});


// Export the model
module.exports = mongoose.model('assignPropertyToOwner', dbSchema);

