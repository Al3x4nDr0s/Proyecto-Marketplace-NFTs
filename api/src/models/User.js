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
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    user_type: [{
            type: Schema.Types.ObjectId,
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
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

// UserSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id
//         delete returnedObject._id
//         delete returnedObject.__v
//     }
// })

module.exports = model('User', UserSchema);