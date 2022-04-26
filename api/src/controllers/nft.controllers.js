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
        res.json(allNfts);
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

module.exports = { getAllNfts };