
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
<<<<<<< HEAD
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
=======
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
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
module.exports = mongoose.model('user', dbSchema);

