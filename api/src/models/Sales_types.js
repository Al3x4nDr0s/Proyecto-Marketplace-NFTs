const { Schema, model } = require('mongoose');

const Sales_types = Schema({
    name: {
        type: String
    }

});

module.exports = model('Sales_types', Sales_types);