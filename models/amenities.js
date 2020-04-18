<<<<<<< HEAD

=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
<<<<<<< HEAD
      name: {
        type: String,
        required: true    },

        icon: {
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
    icon: {
        type: String,
        required: true
    },
    propertyType: {
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
module.exports = mongoose.model('amenities', dbSchema);

=======
module.exports = mongoose.model('amenities', dbSchema);
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
