// const jwt = require("jsonwebtoken");
const Usuario = require('../models/User');
const user_type = require('../models/User_type');

const validarADMIN_ROLE = async (req, res, next) => {

    const uid = req.uid;
    try {
        console.log('uid', uid);
        const usuarioDB = await Usuario.findById(uid);
        
        console.log(usuarioDB);
        // if (!usuarioDB) {
        //     return res.status(404).json({
        //         ok:false,
        //         msg: 'usuario no existe'
        //     })
        // }
        // if (usuarioDB.role != 'ADMIN_ROLE') {
        //     return res.status(403).json({
        //         ok:false,
        //         msg: 'no tiene autorizacion'
        //     })
        // }
        next();

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'unauthorized'
        })
    }

}
module.exports = {
    validarADMIN_ROLE,
}