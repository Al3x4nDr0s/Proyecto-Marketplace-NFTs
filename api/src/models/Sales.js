const { Schema, model } = require('mongoose');
require('mongoose-double')(mongoose);

const Sales = Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    namenft: {
        type: Schema.Types.ObjectId,
        ref: 'Nft'
    },
    currencies_id: {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'
    },
    amount: {
        type: mongoose.Types.Double
    }

});

Sales.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Sales', Sales);