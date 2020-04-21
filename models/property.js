
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      name: {
        type: String,
        required: true    },

        address: {
        type: String,
        required: true    },

        propertyType: {
        type: String,
        required: true    },

        leaseType: {
        type: String,
        required: true    },

        description: {
        type: String,
        required: true    },

        rentalTypeId: {
        type: String,
        required: false    },

        securityDeposit: {
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
module.exports = mongoose.model('property', dbSchema);

