const { Router} = require ('express');
const router = Router();
const { getAllNfts } = require ('../controllers/nftControllers');

router.get('/',getAllNfts);


module.exports = router;