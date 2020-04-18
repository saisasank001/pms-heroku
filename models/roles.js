
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      roleName: {
        type: String,
        required: true    },

        access: {
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
module.exports = mongoose.model('roles', dbSchema);

