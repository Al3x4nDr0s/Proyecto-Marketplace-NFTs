const { Router} = require ('express');
const router = Router();
const { getAllNfts, putNftUpdate, deleteNft } = require ('../controllers/nftControllers');

router.get('/',getAllNfts);
router.put('/:id', putNftUpdate);
router.delete('/:id', deleteNft);


module.exports = router;