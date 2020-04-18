var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    roleName: {
        type: String,
        required: true
    },
    access: {
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
module.exports = mongoose.model('role', dbSchema);