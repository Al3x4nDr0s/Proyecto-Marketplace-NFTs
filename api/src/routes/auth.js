const router = require('express').Router();
const { check } = require('express-validator')
//? controllers 
const { login, googleSignIn } = require("../controllers/auth.controllers");
const { validarCampos } = require('../middlewares/validar.campos.js');

router.post('/',
    [
        check('email', 'El email es requerido y debe ser valido').not().isEmpty().isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login
);
router.post('/google', googleSignIn);

module.exports = router;