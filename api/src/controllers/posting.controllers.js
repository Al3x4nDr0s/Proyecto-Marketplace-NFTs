const Posting = require('../models/Posting');

const createNewPost = async (req, res) => {
    try {
        const newPost = new Posting(req.body);
        await newPost.save();
        res.status(200).json({
            ok: true,
            msg: 'Post created',
            newPost
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Post could not be created"
        });
        console.log(error);
    };
};

const getAllPost = async (req, res) => {
    try {
        const allPosts = await Posting.find()
            .populate('username', {username: 1, _id: 0})
        
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Posts not Found"
        });
        console.log(error);
    }
};

module.exports = { createNewPost };