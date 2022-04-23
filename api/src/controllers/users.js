const { response } = require('express');//? for use response object in express
const bcrypt = require('bcrypt');
const Usuario = require("../models/User.js");

// createUser, getUser, getUsers, updateUser, deleteUser 
const createUser = async (req, res) => {}
const getUser = async (req, res) => {}
const getUsers = async (req, res) => {}
const updateUser = async (req, res) => {}
const deleteUser = async (req, res) => {}

module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };