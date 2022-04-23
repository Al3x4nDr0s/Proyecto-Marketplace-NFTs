const mongoose = require('mongoose');

const Files_types = mongoose.Schema({
    name: {
        type: String
    }

});

module.exports = mongoose.model('Files_type', Files_types);