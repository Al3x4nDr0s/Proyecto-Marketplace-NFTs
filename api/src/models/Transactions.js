const { Schema, model } = require('mongoose');
var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const Transactions = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String
    },
    nftId: {
        type: Schema.Types.ObjectId,
        ref: 'Nft'
    },
    namenft: {
        type: String
    },
    currencies: {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'
    },
    amount: {
        type: mongoose.Types.Double
    },
    transaction_type: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction_type'
    }
});

Transactions.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Transactions', Transactions);