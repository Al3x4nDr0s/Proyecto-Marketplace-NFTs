const { Schema, model } = require('mongoose');

const Posting = Schema({
    post : {
        type: String
    },
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    username: {
        type: String
    },
    nftid: {
        type: Schema.Types.ObjectId,
        ref: 'Nft'
    },
    namenft: {
        type: String
    }
});
Posting.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});


module.exports = model('Posting', Posting);