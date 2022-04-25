const router = require('express').Router();
const { check } = require('express-validator')
//? controllers
const { createUser, getUser, getUsers, updateUser, deleteUser } = require("../controllers/users.controllers");

router.post('/', createUser);
router.put('/', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
