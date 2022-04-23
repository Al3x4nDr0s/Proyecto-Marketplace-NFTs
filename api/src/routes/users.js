const { Router } = require('express');
const router = Router();

const { deleteUser } = require('../controllers/controllers.users');

router.delete('/delete/:id', deleteUser);






router.delete('/delete/:id', deleteUsers);