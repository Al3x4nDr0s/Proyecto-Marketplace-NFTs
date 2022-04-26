const Nft = require ('../models/Nft');

const getAllNfts = async (req, res) => {
    try {
        const { name } = req.query;
        const allNfts = await Nft.find({})
            .populate('category', { name:1, _id:0})
            .populate('collection_nft', { name:1, _id:0})
            .populate('currencies', { name:1, _id:0})
            .populate('sales_types', { name:1, _id:0})
            .populate('files_types', { name:1, _id:0})
        if (name){
            response = allNfts.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()));
            if(response.length >= 1 ) return res.send(response);
            return res.status(404).json({
                ok: 'true',
                msg: 'Name NFT not found'
            });
        } else {
            return res.status(200).json(allNfts);
        }
    } catch (error) {
        res.status(404).json({
            ok: 'false',
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
            ok: 'true',
            msg: 'NFT created'
        });
    } catch (error) {
        res.status(500).json({
            ok: 'false',
            msg: "Ups ocurrio un problema"
        });
        console.log(error);
    };
};

const getNftById = async (req, res) =>{
    const { id } = req.params;
    try {

    } catch (error) {
        res.status(404).json({
            ok: 'false',
            msg: '404 Not Found'
        });
        console.log(error);
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
