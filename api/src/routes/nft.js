const router = require('express').Router();
const { getAllNfts, createNft } = require ('../controllers/nft.Controllers');

router.get('/',getAllNfts);
router.post('/', createNft);


module.exports = router;