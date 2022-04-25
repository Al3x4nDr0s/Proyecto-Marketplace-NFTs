const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    username: {
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
        type: String
    },
    user_type: [{
            type: Schema.ObjectId,
            ref: 'User_type'  
    }],
    favorite: {
        type: String
    },
    collectionNft: {
        type: String
    },
    wallet: [{
        type: Schema.Types.ObjectId,
        ref: 'Wallet'  
    }],
    description: {
        type: String
    }
});
//? schema methods for user model
UserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('User', UserSchema);