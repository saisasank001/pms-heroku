var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    bankName: {
        type: String,
        required: true
    },
    bankAddress: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    mmid: {
        type: String,
        required: true
    },
    userId: {
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
module.exports = mongoose.model('bankaccount', dbSchema);