const bcrypt = require('bcrypt');
const Usuario = require("../models/User.js");
// const User_type = require("../models/User_type.js");
const { generateJwt } = require('../helpers/generateJwt');

const login = async (req, res) => {
    //? login comun por ahora
    const { email, password } = req.body;
    try {
        //? validar email
        const existEmail = await Usuario.findOne({ email }).populate('user_type', 'name');
        if (!existEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El email no esta registrado'
            });
        }
        //? validar password
        const validPassword = await bcrypt.compareSync(password, existEmail.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña es incorrecta'
            });
        }
        //? generar jwt
        const token = await generateJwt(existEmail.id);
        //? respuesta
        res.json({
            ok: true,
            usuario: existEmail,
            token
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }

}

//?export 
module.exports = { 
    login
}