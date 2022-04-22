const mongoose = require('mongoose');

const Wallet = mongoose.Schema({
    name: [{ bnb: Number, busd: Number, eth: Number }],

});

module.exports = mongoose.model('Wallet', Wallet);