const { Schema, model } = require('mongoose');

const mongoose = require('mongoose');

const Category = Schema({
    name: {
        type: String
    }
});

module.exports = model('Category', Category);