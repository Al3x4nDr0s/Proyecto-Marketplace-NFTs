const { Schema, model } = require('mongoose');
var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

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
        user_creator: {
            type: Schema.Types.ObjectId,
            ref: 'User'},
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'},
        contract_address: String,
        token_id: Number
    },
    likes: {
        type: Number
    },
    create_date: {
        type: String
    },
    collection_nft: {
        type: Schema.Types.ObjectId,
        ref: 'Collection_nft'  
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'  
    },
    price: {
        type: mongoose.Types.Double
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










