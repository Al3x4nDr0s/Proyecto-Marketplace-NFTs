const router = require('express').Router();
const { createNewAuction, getAllAuction, deleteAuction, getAllAuctionById } = require("../controllers/auction.controllers");

router.post('/', createNewAuction);
router.get('/', getAllAuction);
router.delete('/', deleteAuction);
router.get('/:id', getAllAuctionById);

module.exports = router;



