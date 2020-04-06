var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    currentAddress: {
        type: String,
        required: true
    },
    documentsUpload: {
        type: String,
        required: true
    },
    ownerPhoto: {
        type: String,
        required: true
    },
    agreementType: {
        type: String,
        required: true
    },
    backgroundVerificationStatus: {
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
module.exports = mongoose.model('owner', dbSchema);