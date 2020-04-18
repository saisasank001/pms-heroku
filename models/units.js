
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      unitDetails: {
        type: String,
        required: true    },

        propertyId: {
        type: String,
        required: true    },

        rent: {
        type: String,
        required: true    },

        area: {
        type: String,
        required: true    },

        facing: {
        type: String,
        required: true    },

        amenities: {
        type: String,
        required: true    },

        inspection: {
        type: String,
        required: true    },

        propertyavailablefrom: {
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
module.exports = mongoose.model('units', dbSchema);

