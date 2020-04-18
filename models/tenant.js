<<<<<<< HEAD

=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
<<<<<<< HEAD
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

        tenantPhoto: {
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
=======
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
    tenantPhoto: {
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
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
});


// Export the model
<<<<<<< HEAD
module.exports = mongoose.model('tenant', dbSchema);

=======
module.exports = mongoose.model('tenant', dbSchema);
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
