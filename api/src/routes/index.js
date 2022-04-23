const { Router } = require('express');
const router = Router();


// Importar los routers;

const nftRoute = require('./nft');

// Configurar los routers

router.use('/nft', nftRoute);

module.exports = router;

//? Ejemplo de como exportar una funcion
//? otro cambio 
//? otro comentario