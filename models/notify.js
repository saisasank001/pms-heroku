
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
      owner_tenant_id: {
        type: String,
        required: true    },

        notifyMessage: {
        type: String,
        required: true    },

        userType: {
        type: String,
        required: true    },

        status: {
        type: String,
        required: true    },

        salesGroup: {
        type: String,
        required: true    },

        salesUserId: {
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
module.exports = mongoose.model('notify', dbSchema);

