const { Router} = require ('express');
const router = Router();
const { getAllNfts, createNft, putNftUpdate, deleteNft } = require ('../controllers/nft.controllers');

router.get('/',getAllNfts);
router.post('/',  createNft)
router.put('/:id', putNftUpdate);
router.delete('/:id', deleteNft);


module.exports = router;