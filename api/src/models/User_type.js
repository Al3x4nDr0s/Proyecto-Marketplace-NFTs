const mongoose = require('mongoose');

const User_type = mongoose.Schema({
    name: {
        type: String,
        
    }
});

module.exports = mongoose.model('User_type', User_type);