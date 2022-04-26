const { Router } = require('express');

const usersRouter = require("../routes/users");
const authRouter = require("../routes/auth");

const router = Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;

