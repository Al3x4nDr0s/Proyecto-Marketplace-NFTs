const { Router } = require('express');

const usersRouter = require("../routes/users");
const authRouter = require("../routes/auth");
const nftRouter = require("../routes/nft");
const miscRouter = require('../routes/misc');

const router = Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/nft', nftRouter);
router.use('/misc', miscRouter);


module.exports = router;

