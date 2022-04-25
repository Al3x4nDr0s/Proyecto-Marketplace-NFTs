const Nft = require ('../models/Nft');

const getAllNfts = async (req, res) => {
    try {
        const { name } = req.query;
        const allNfts = await Nft.find({})
        if (name){
            response = allNfts.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()));
            if(response.length >= 1 ) return res.send(response);
            return res.status(404).json({
                msg: 'Name NFT not found'
            });
        } else {
            return res.status(200).json(allNfts);
        }
        res.json(allNfts);
    } catch (error) {
        res.status(404).json({
            msg: '404 Not Found'
        });
        console.log(error);
    };
};

const createNft = async (req, res) => {
    try {
        const nft = new Nft(req.body);
        await nft.save();
        res.status(200).json({
            msg: 'NFT created'
        });
    } catch (error) {
        res.status(500).json({
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const getNftById = async (req, res) =>{
    const { id } = req.params;
    try {
        
    } catch (error) {
        res.status(404).send("404 Not Found");
        console.log(error)
    };
};

module.exports = { getAllNfts, createNft };