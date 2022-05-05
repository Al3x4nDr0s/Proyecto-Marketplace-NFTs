const Auction = require("../models/Auction");


const getAllAuction = async (req, res) => {
    try {
        const getAuction = await Auction.find(); 
        res.status(200).json(getAuction);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Auction not Found"
        });
        console.log(error);
    };
};

const getAllAuctionById = async (req, res) => {
    const { id } = req.params;
    try {
        const getAuction = await Auction.findById(id); 
        res.status(200).json(getAuction);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Id not Found"
        });
        console.log(error);
    };
};

const createNewAuction = async (req, res) => {
    try {
        const newAuction = new Auction(req.body);
        await newAuction.save();
        res.status(200).json({
            ok: true,
            msg: 'New Auction created',
            newAuction
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "New Auction could not be create"
        });
        console.log(error);
    };
};

const deleteAuction = async (req, res) => {
    const { id } = req.params;
    try {
        const delAuction = await Auction.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "Auction deleted",
            delAuction
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Auction could not be deleted"
        });
        console.log(error);
    }
};

module.exports = { getAllAuction, createNewAuction, deleteAuction, getAllAuctionById };
