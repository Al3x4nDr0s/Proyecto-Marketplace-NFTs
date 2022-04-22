const mongoose = require('mongoose');

const Sales_types = mongoose.Schema({
    name: {
        type: String
    }

});

module.exports = mongoose.model('Sales_type', Sales_types);