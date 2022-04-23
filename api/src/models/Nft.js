const mongoose = require('mongoose');

const Nft = mongoose.Schema({
    name: {
        type: String,  
    },
    image: {
        type: String  
    },
    description: {
        type: String
    },
    details: [{
        user_creator: String,
        owner: String,
        contract_address: String,
        token_id: Number
    }],
    rarity: {
        type: String
    },
    create_date: {
        type: Date
        
    },
    collectionNft: {
        type: Boolean || [{
            type: mongoose.Schema.ObjectId,
            ref: 'Collection_nft'  
        }]
    },
    category: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Categorie'  
    }],
    price: {
        type: int
    },
    sales_types: [{
        type: mongoose.Schema.ObjectId,
        ref: 'sales_types'  
    }],
    currencies:  [{
        type: mongoose.Schema.ObjectId,
        ref: 'Currencies'  
    }],
    files_types: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Files_types'  
    }],
});

module.exports = mongoose.model('Nft', Nft);










