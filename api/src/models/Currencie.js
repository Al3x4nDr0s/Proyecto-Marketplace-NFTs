const mongoose = require('mongoose');

const Currencies = mongoose.Schema({
    name: {
        type: String
    }

});

module.exports = mongoose.model('Currencie', Currencies);