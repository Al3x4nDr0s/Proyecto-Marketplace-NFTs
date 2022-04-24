const bcrypt = require('bcrypt');
const Usuario = require("../models/User.js");
const User_type = require("../models/User_type.js");
const { generateJwt } = require('../helpers/generateJwt');
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
        const usuario = new Usuario({
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
const getUser = async (req, res) => {}
const getUsers = async (req, res) => {

    //? obtener usuarios //? paginacion
    const { page = 1, limit = 10 } = req.query; 
    const start = (page - 1) * limit;
    const end = page * limit;
    try {
        
        const users = await Usuario.find({})
            .skip(start)
            .limit(limit)
            .populate('user_type', 'name')
            .exec();
        const total = await Usuario.countDocuments();
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
const updateUser = async (req, res) => {}
const deleteUser = async (req, res) => {}

module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };