const mongoose = require('mongoose');

const User = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    image: {
        type: Text
    },
    user_type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'User_type'  
    }],
    favorite: {
        type: String
    },
    collection: {
        type: String
    },
    wallet: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Wallet'  
    }],
    description: {
        type: Text
    }
});



module.exports = mongoose.model('User', User);