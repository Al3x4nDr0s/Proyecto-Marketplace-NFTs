const { Schema, model } = require('mongoose');

const Wallet = Schema({
    name: { bnb: Number, busd: Number, eth: Number },
});

module.exports = model('Wallet', Wallet);