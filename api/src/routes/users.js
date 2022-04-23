const router = require('express').Router();
const { check } = require('express-validator')
//? controllers
const { createUser, getUser, getUsers, updateUser, deleteUser } = require("../controllers/users.controllers");

router.post('/', createUser);
router.get('/', getUsers);


module.exports = router;