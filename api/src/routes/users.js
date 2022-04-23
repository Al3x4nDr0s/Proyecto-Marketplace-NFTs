const router = require('express').Router();
const { check } = require('express-validator')
//? controllers
const { createUser, getUser, getUsers, updateUser, deleteUser } = require("../controllers/users.controller");

router.post('/', createUser);

module.exports = router;