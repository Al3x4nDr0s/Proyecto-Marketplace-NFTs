const axios = require ('axios');
const Nft = require ('../models/Nft');

const getAllNfts = async (req, res) => {
    try {
        const { name } = req.query;
        const allNfts = await Nft.find();
        if (name){
            response = allNfts.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()));
            if(response.length >= 1 ) return res.send(response);
            return res.status(404).send({msg: "Name NFT not found"});
        } else {
            return res.status(200).send(allNfts);
        }
        
    } catch (error) {
        res.status(404).send("404 Not Found");
        console.log(error)
    };
};

const getNftById = async (req, res) =>{
    try {
        const { id } = req.params;
        
        
    } catch (error) {
        res.status(404).send("404 Not Found");
        console.log(error)
    };
};

const putNftUpdate = async (res, req) => {
    try {
        const nftUpdate = await Nft.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } //es para que nos devuelva el actualizado y no el anterior
        );
        res.json(nftUpdate);
        
    } catch (error) {
        res.status(404).json({error: 'could not be modified'})
    }
}
const deleteNft = async (req, res) => {
    const { id } = req.params
    try {
        const nftDelete = await Nft.findByIdAndDelete(id);
        res.json(nftDelete);
        
    } catch (error) {
        res.status(404).json({error: 'could not delete'})
    }
}

module.exports = { 
    getAllNfts,
    putNftUpdate,
    deleteNft
};