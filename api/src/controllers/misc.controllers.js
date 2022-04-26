const Category = require('../models/Category');
const Collection = require('../models/Collection_nft');
const Currencies = require('../models/Currencies');
const Files_types = require('../models/Files_types');
const Sales_types = require('../models/Sales_types');

const createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
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

const deleteCategory = async(req, res) => {
    const { id } = req.params;
    try {
        const delCategory = await Category.findByIdAndDelete(id);
        res.json(delCategory);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Category not Found"
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

const deleteCollection = async(req, res) => {
    const { id } = req.params;
    try {
        const delCollection = await Collection.findByIdAndDelete(id);
        res.json(delCollection);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Collection not Found"
        });
        console.log(error);
    };
};

const createCurrencies = async (req, res) => {
    try {
        const newCurrencies = new Currencies(req.body);
        await newCurrencies.save();
        res.status(200).json({
            ok: true,
            msg: 'Currency created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const deleteCurrencies = async(req, res) => {
    const { id } = req.params;
    try {
        const delCurrencies = await Currencies.findByIdAndDelete(id);
        res.json(delCurrencies);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Currency not Found"
        });
        console.log(error);
    };
};

const createFiles_types = async (req, res) => {
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

const deleteFiles_types = async(req, res) => {
    const { id } = req.params;
    try {
        const delFiles_types = await Files_types.findByIdAndDelete(id);
        res.json(delFiles_types);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Files types not Found"
        });
        console.log(error);
    };
};

const createSales_types = async (req, res) => {
    try {
        const newSales_types = new Sales_types(req.body);
        await newSales_types.save();
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

const deleteSales_types = async(req, res) => {
    const { id } = req.params;
    try {
        const delSales_types = await Sales_types.findByIdAndDelete(id);
        res.json(delSales_types);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Files types not Found"
        });
        console.log(error);
    };
};

module.exports = {createCategory, createCollection, createCurrencies, createFiles_types,
     createSales_types, deleteCategory, deleteCollection, deleteCurrencies, deleteFiles_types,
    deleteSales_types};

