const router = require('express').Router();
const {createTransaction, getAllTransactions, getTransByNftId, getTransByUserId,
     deleteTransById} = require('../controllers/transactions.controllers');

router.post('/', createTransaction );
router.get('/', getAllTransactions);
router.get('/nft/:id', getTransByNftId);
router.get('/user/:id', getTransByUserId);
router.delete('/:id', deleteTransById);


module.exports = router;