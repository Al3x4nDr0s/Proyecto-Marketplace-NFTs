const { Router} = require ('express');
const router = Router();
const { getAllNfts, createNft, putNftUpdate, deleteNft, getNftById } = require ('../controllers/nft.Controllers');

router.get('/', getAllNfts); /// Trae todos los NFT y name por query
router.post('/', createNft);
router.get('/:id', getNftById);
router.put('/:id', putNftUpdate);
router.delete('/:id', deleteNft);


module.exports = router;