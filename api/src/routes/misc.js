const router = require('express').Router();
const { createCategorie, createCollection, createCurrencie, createFiles_type, createSales_type } = require('../controllers/misc.controllers')


router.post('/categorie', createCategorie);
router.post('/collection', createCollection);
router.post('/currencies', createCurrencie);
router.post('/files_type', createFiles_type);
router.post('/sales_type', createSales_type);

module.exports = router;
