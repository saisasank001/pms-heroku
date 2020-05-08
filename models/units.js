
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
        type: Number,
        required: true    },

        area: {
        type: Number,
        required: true    },

	type:{
        type: String,
        required: true    },

	additionalRooms:{
        type: Object,
        required: true    },

        facing: {
        type: String,
        required: true    },

        amenities: {
        type: Object,
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
    sharingType:{
        type: String,
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

