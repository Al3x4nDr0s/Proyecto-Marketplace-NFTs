const Category = require('../models/Category');
const Collection = require('../models/Collection_nft');
const Currencies = require('../models/Currencies');
const Files_types = require('../models/Files_types');
const Sales_types = require('../models/Sales_types');

const getCategory = async (req, res) => {
    const category = await Category.find();
    res.json(category);
}
const createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json({
            ok: true,
            msg: 'Category created',
            newCategory
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const modifyCategorie = async (res, req) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const categoryUpdate = await Category.findByIdAndUpdate(
            id, 
            body,
            { new: true },
        );
        res.status(200).json({
            ok: true,
            msg: 'Category modified',
            categoryUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Category could not be modified"
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

const getCollection = async (req, res) => {
    const collection = await Collection.find();
    res.json(collection);
}

const createCollection = async (req, res) => {
    try {
        const newCollection = new Collection(req.body);
        await newCollection.save();
        res.status(200).json({
            ok: true,
            msg: 'Collection created',
            newCollection
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const modifyCollection = async (res, req) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const collectionUpdate = await Collection.findByIdAndUpdate(
            id,
            body,
            { new: true } 
        );
        res.status(200).json({
            ok: true,
            msg: 'Collection modified',
            collectionUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Collection could not be modified"
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

const getCurrencies = async (req, res) => {
    const currencies = await Currencies.find();
    res.json(currencies);
}

const createCurrencies = async (req, res) => {
    try {
        const newCurrencies = new Currencies(req.body);
        await newCurrencies.save();
        res.status(200).json({
            ok: true,
            msg: 'Currency created',
            newCurrencies
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const modifyCurrencies = async (res, req) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const currenciesUpdate = await Currencies.findByIdAndUpdate(
            id,
            body,
            { new: true },
        );
        res.status(200).json({
            ok: true,
            msg: 'Currency modified',
            currenciesUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Currency could not be modified"
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

const getFiles_types = async (req, res) => {
    const files_types = await Files_types.find();
    res.json(files_types);
}

const createFiles_types = async (req, res) => {
    try {
        const newFiles_type = new Files_types(req.body);
        await newFiles_type.save();
        res.status(200).json({
            ok: true,
            msg: 'Files_types created',
            newFiles_type
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const modifyFiles_types = async (res, req) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const files_typesUpdate = await Files_types.findByIdAndUpdate(
            id,
            body,
            { new: true } 
        );
        res.status(200).json({
            ok: true,
            msg: 'Files types modified',
            files_typesUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Files types could not be modified"
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

const getSales_types = async (req, res) => {
    const sales_types = await Sales_types.find();
    res.json(sales_types);
}

const createSales_types = async (req, res) => {
    try {
        const newSales_types = new Sales_types(req.body);
        await newSales_types.save();
        res.status(200).json({
            ok: true,
            msg: 'Sales_types created',
            newSales_types
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const modifySales_types = async (res, req) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const sales_typesUpdate = await Sales_types.findByIdAndUpdate(
            id,
            body,
            { new: true } 
        );
        res.status(200).json({
            ok: true,
            msg: 'Sales types modified',
            sales_typesUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Sales types could not be modified"
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
    deleteSales_types, modifyCategorie, modifyCollection, modifyCurrencies, modifyFiles_types,
    modifySales_types, getCategory, getCollection, getCurrencies, getFiles_types, getSales_types};

