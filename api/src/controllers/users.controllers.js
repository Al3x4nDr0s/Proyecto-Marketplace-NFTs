const { response } = require('express');//? for use response object in express
const bcrypt = require('bcrypt');
const Usuario = require("../models/User.js");
const User = require('../models/User.js');

// createUser, getUser, getUsers, updateUser, deleteUser 
const createUser = async (req, res) => {
    //? agregar usuario
}
const getUser = async (req, res) => {}
const getUsers = async (req, res) => {}
const updateUser = async (req, res) => {
    try {
        const userUpdate = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(userUpdate);
        
    } catch (error) {
        res.status(404).json({error: 'could not be modified'})
    }
    
    // try {
    //     if(!req?.body?.id) {
    //         console.log(req.body.id)
    //         return res.status(404).json({error: 'ID parameter is required'});
    //     }
    //     const user = await User.findOne({id: req.body.id}).exec(); //para ejecutar una consulta en un modelo "asincrónico"
    //     if(!user) {
    //         return res.status(404).json(`No user matches ID ${req.body.id}`)
    //     }
    //     if(req.body?.username) user.username = req.body.username
    //     if(req.body?.firstName) user.firstName = req.body.firstName
    //     if(req.body?.lastName) user.lastName = req.body.lastName
    //     if(req.body?.image) user.image = req.body.image
    //     if(req.body?.favorite) user.favorite = req.body.favorite
    //     if(req.body?.description) user.description = req.body.description
    //     res.json(data.user)

    // } catch (error) {
    //     res.status(404).json({error: 'could not be modified'})
    // }
}
const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id);
        res.json(user);
        
    } catch (error) {
        res.status(404).json({error: 'could not delete'})
    }
}

module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };