const Categorie = require('../models/Category');
const Collection = require('../models/Collection_nft');
const Currencie = require('../models/Currencies');
const Files_types = require('../models/Files_types');
const Sales_types = require('../models/Sales_types');

const createCategorie = async (req, res) => {
    try {
        const newCategorie = new Categorie(req.body);
        await newCategorie.save();
        res.status(200).json({
            ok: true,
            msg: 'Categorie created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const createCollection = async (req, res) => {
    try {
        const newCollection = new Collection(req.body);
        await newCollection.save();
        res.status(200).json({
            ok: true,
            msg: 'Collection created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const createCurrencie = async (req, res) => {
    try {
        const newCurrencie = new Currencie(req.body);
        await newCurrencie.save();
        res.status(200).json({
            ok: true,
            msg: 'Currencie created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const createFiles_type = async (req, res) => {
    try {
        const newFiles_type = new Files_types(req.body);
        await newFiles_type.save();
        res.status(200).json({
            ok: true,
            msg: 'Files_types created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const createSales_type = async (req, res) => {
    try {
        const newSales_type = new Sales_types(req.body);
        await newSales_type.save();
        res.status(200).json({
            ok: true,
            msg: 'Sales_types created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

module.exports = {createCategorie, createCollection, createCurrencie, createFiles_type, createSales_type};

