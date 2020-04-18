
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      username: {
        type: String,
        required: true    },

        password: {
        type: String,
        required: true    },

        role: {
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
module.exports = mongoose.model('user', dbSchema);

