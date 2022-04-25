const bcrypt = require('bcrypt');
const User = require("../models/User.js");
const User_type = require("../models/User_type.js");
const { generateJwt } = require('../helpers/generateJwt');
const { response } = require('express');
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
        console.log(usuario._id);
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
        const total = await User.countDocuments();
        res.json({
            ok: true,
            user: req.uid, //@ id del usuario que esta logueado
            users,
            total,
            end
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

const getUser = async (req, res) => {}
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
              response.json(result)
          })
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