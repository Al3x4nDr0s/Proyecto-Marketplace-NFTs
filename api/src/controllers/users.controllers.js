const bcrypt = require('bcrypt');
const Usuario = require("../models/User.js");
const Nft = require('../models/Nft')
const User_type = require("../models/User_type.js");
const { generateJwt } = require('../helpers/generateJwt');
const { response } = require('express');
const User = require('../models/User.js');
// createUser, getUser, getUsers, updateUser, deleteUser 

const createUser = async (req, res) => {
    //? agregar usuario  //? phone
    const { username, firstName, lastName, email, password } = req.body;
    try {
        //? validar nickname !importante y email
        const existEmail = await Usuario.findOne({ email });
        if (existEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El email ya esta registrado'
            });
        }
        //? role user set id user comun default
        const user_type = await User_type.findOne({ name: 'user' });
        const usuario = new User({
            username,
            firstName,
            lastName,
            email,
            password,
            user_type: user_type._id
        });
        //? encriptar password
        const salt = await bcrypt.genSalt(10);
        usuario.password = bcrypt.hashSync(password, salt);
        //? guardar usuario
        await usuario.save();
        //? generar jwt
        const token = await generateJwt(usuario.id);
        //? respuesta
        res.json({
            ok: true,
            usuario,
            token
        });

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }

}
const getUsers = async (req, res) => {
    
    //? obtener usuarios //? paginacion
    const { page = 1, limit = 10 } = req.query; 
    const start = (page - 1) * limit;
    const end = page * limit;
    try {
        
        const users = await User.find({})
            .skip(start)
            .limit(limit)
            .populate('user_type', 'name')
            .exec();
        const total = await Usuario.countDocuments();
        const countPages = Math.ceil(total / limit);
        res.json({
            ok: true,
            user: req.uid, //@ id del usuario que esta logueado
            users,
            total,
            end,
            countPages
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user)
}

const updateUser =  (req, res) => {
    
    const { id } = req.params;
    const user = req.body;
    const newUserInfo = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        favorite: user.favorite,
        description: user.description
    }

         User.findByIdAndUpdate( id, newUserInfo, { new: true })
          .then(result => {
              res.json(result)
          })
          .catch(e => console.log(e))
}
       

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await Usuario.findByIdAndDelete(id);
        // await Nft.deleteMany({details: {owner: id} })
        const nfts =  await Nft.find({ details: { owner: id } }).exec();
            nfts.forEach( nft => {
                Nft.deleteOne(nft._id);
})
        res.json(user);
        
     } catch (error) {
        res.status(404).json({error: 'could not delete'})
    }
}


module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };