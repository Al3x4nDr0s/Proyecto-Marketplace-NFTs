const mongoose = require('mongoose');
const { Schema } = mongoose;

const Nft = new Schema({

    name: String,
    description: String

});

module.exports = mongoose.model('Nft', Nft);