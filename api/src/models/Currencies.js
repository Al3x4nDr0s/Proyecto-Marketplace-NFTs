const { Schema, model } = require('mongoose');

const Currencies = Schema({
    name: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = model('Currencies', Currencies);