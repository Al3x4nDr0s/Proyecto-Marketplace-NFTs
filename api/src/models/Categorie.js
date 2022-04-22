const mongoose = require('mongoose');

const Categories = mongoose.Schema({
    name: {
        type: String
    }

});

module.exports = mongoose.model('Categorie', Categories);