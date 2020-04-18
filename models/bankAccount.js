
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      bankName: {
        type: String,
        required: true    },

        bankAddress: {
        type: String,
        required: true    },

        accountNumber: {
        type: String,
        required: true    },

        ifscCode: {
        type: String,
        required: true    },

        mmid: {
        type: String,
        required: true    },

        userId: {
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
});


// Export the model
module.exports = mongoose.model('bankAccount', dbSchema);

