
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      userId: {
        type: String,
        required: true    },

        propertyId: {
        type: String,
        required: true    },

        userType: {
        type: String,
        required: true    },

        photo: {
        type: String,
        required: true    },

        fromDate: {
        type: String,
        required: true    },

        toDate: {
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
module.exports = mongoose.model('agreement', dbSchema);

