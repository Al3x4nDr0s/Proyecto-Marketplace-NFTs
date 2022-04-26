const router = require('express').Router();
const { createCategory, createCollection, createCurrencies, createFiles_types, createSales_types,
deleteCategory, deleteCollection, deleteCurrencies, deleteFiles_types, deleteSales_types } = require('../controllers/misc.controllers')


router.post('/category', createCategory);
router.post('/collection', createCollection);
router.post('/currencies', createCurrencies);
router.post('/files_type', createFiles_types);
router.post('/sales_type', createSales_types);
router.delete('/category', deleteCategory);
router.delete('/collection', deleteCollection);
router.delete('/currencies', deleteCurrencies);
router.delete('/files_type', deleteFiles_types);
router.delete('/sales_type', deleteSales_types);

module.exports = router;
