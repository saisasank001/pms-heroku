
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      userId: {
        type: String,
        required: true    },

        name: {
        type: String,
        required: true    },

        email: {
        type: String,
        required: true    },

        mobileNumber: {
        type: String,
        required: true    },

        currentAddress: {
        type: String,
        required: true    },

        documentsUpload: {
        type: String,
        required: true    },

        ownerPhoto: {
        type: String,
        required: true    },

        agreementType: {
        type: String,
        required: true    },

        backgroundVerificationStatus: {
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
module.exports = mongoose.model('owner', dbSchema);

