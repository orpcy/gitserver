var mongoose = require('mongoose');

var webSchema = mongoose.Schema({
    texts:{
        type: String,
        required: true
    },
    styling:{
        type: String,
        required: true
    },
    scripting:{
        type: String,
        required: true
    },
    database:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('web', webSchema);