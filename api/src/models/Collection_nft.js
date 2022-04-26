const { Schema, model } = require('mongoose');

const Collection_nft = Schema({
    name: {
        type: String,  
    }
});

module.exports = model('Collection_nft', Collection_nft);