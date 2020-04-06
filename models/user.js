var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    alertId: {
        type: String,
        required: true
    }
});


// Export the model
module.exports = mongoose.model('user', dbSchema);