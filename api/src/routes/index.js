const { Router } = require('express');
const router = Router();


//const tRoute = require('/');
const users = require('./users')

// Configurar los routers
router.use('/users', users);

//router.use('/', tRoute);

module.exports = router;

//? Ejemplo de como exportar una funcion
//? otro cambio 
//? otro comentario