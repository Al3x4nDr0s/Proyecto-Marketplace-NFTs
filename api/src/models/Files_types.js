const { Schema, model } = require('mongoose');

const Files_types = Schema({
    name: {
        type: String
    }

});

module.exports = model('Files_types', Files_types);