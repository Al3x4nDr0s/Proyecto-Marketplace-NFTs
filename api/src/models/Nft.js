const { Schema, model } = require('mongoose');

const Nft = Schema({
    name: {
        type: String,  
    },
    image: {
        type: String  
    },
    description: {
        type: String
    },
    details: {
        user_creator: String,
        owner: String,
        contract_address: String,
        token_id: Number
    },
    rarity: {
        type: String
    },
    create_date: {
        type: String
    },
    collection_nft: {
        type: Boolean || {
            type: Schema.Types.ObjectId,
            ref: 'Collection_nft'  
        }
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'  
    },
    price: {
        type: Number
    },
    sales_types: {
        type: Schema.Types.ObjectId,
        ref: 'Sales_types'  
    },
    currencies:  {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'  
    },
    files_types: {
        type: Schema.Types.ObjectId,
        ref: 'Files_types'  
    },
});

module.exports = model('Nft', Nft);










