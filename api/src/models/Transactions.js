const { Schema, model } = require('mongoose');
var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const Transactions = Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    namenft: {
        type: Schema.Types.ObjectId,
        ref: 'Nft'
    },
    currencies: {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'
    },
    amount: {
        type: mongoose.Types.Double
    },
    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction_type'
    }
});

Transactions.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Transactions', Transactions);