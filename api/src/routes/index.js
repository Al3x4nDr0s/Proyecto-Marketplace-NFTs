const { Router } = require('express');
const usersRouter = require("../routes/users");

const router = Router();

router.use('/api/users', usersRouter);

module.exports = router;

