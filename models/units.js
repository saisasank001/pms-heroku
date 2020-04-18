<<<<<<< HEAD

=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
<<<<<<< HEAD
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
=======
    unitDetails: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    rent: {
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
module.exports = mongoose.model('units', dbSchema);

=======
module.exports = mongoose.model('units', dbSchema);
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
