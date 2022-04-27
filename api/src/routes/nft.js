const { Router} = require ('express');
const router = Router();
<<<<<<< HEAD
const { getAllNfts, createNft, putNftUpdate, deleteNft } = require ('../controllers/nft.controllers');

router.get('/',getAllNfts);
router.post('/',  createNft)
=======
const { getAllNfts, createNft, putNftUpdate, deleteNft, getNftById } = require ('../controllers/nft.Controllers');

router.get('/', getAllNfts); /// Trae todos los NFT y name por query
router.post('/', createNft);
router.get('/:id', getNftById);
>>>>>>> b76257d13ffec65202142a677b88b545fedd8537
router.put('/:id', putNftUpdate);
router.delete('/:id', deleteNft);


module.exports = router;