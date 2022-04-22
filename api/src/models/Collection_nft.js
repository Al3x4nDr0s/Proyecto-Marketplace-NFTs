const mongoose = require('mongoose');

const Collection_nft = mongoose.Schema({
    name: {
        type: String,  
    }
    
});

module.exports = mongoose.model('Collection_nft', Collection_nft);