
const Nft = require ('../models/Nft');
const getAllNfts = async (req, res) => {
    try {
        // const { name } = req.query;
        // const allNfts = await Nft.find({})
        //     .populate('category', { name:1, _id:0})
        //     .populate('collection_nft', { name:1, _id:0})
        //     .populate('currencies', { name:1, _id:0})
        //     .populate('sales_types', { name:1, _id:0})
        //     .populate('files_types', { name:1, _id:0})
        //     .populate('details.owner', { username:1, _id:0})
        //     .populate('details.user_creator', { username:1, _id:0})
            
        // if (name){
        //     response = allNfts.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()));
        //     if(response.length >= 1 ) return res.send(response);
        //     return res.status(404).json({
        //         ok: 'false',
        //         msg: 'Name NFT not found'
        //     });
        // } else {
        //     return res.status(200).json(allNfts);
        // }
        let { page = 1, limit } = req.query; 
        
        const total = await Nft.countDocuments();
        const countPages = Math.ceil(total / limit);
        limit ? limit = parseInt(limit) : limit = total;
        
        const start = (page - 1) * limit;
        const end = page * limit;
        //? AGREGATE 
        const getAllNfts = await Nft.aggregate([
            //? skip limit 
            { $skip: start },
            { $limit : limit },
            //? sort by name
            { $sort: { name: 1 } },
            
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $unwind: {
                    path: '$category',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'collection_nfts',
                    localField: 'collection_nft',
                    foreignField: '_id',
                    as: 'collection_nft'
                }
            },
            {
                $unwind: {
                    path: '$collection_nft',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                //? si no viene no importa
                $lookup: {
                    from: 'currencies',
                    localField: 'currencies',
                    foreignField: '_id',
                    as: 'currencies'
                }
            },
            {
                $unwind: {
                    path: '$currencies',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'sales_types',
                    localField: 'sales_types',
                    foreignField: '_id',
                    as: 'sales_types'
                }
            },
            {
                $unwind: {
                    path: '$sales_types',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'files_types',
                    localField: 'files_types',
                    foreignField: '_id',
                    as: 'files_types'
                }
            },
            {
                $unwind: {
                    path: '$files_types',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'details.owner',
                    foreignField: '_id',
                    as: 'details.owner'
                }
            },
            {  
                $unwind: '$details.owner'
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'details.user_creator',
                    foreignField: '_id',
                    as: 'details.user_creator'
                }
            },
            {
                $unwind: '$details.user_creator'
            },
            {
                $project: {
                    name: 1,
                    image: 1,
                    description: 1,
                    details: {
                        user_creator: {
                            username: 1
                        },
                        owner: {
                            username: 1
                        },
                        contract_address: 1,
                        token_id: 1
                    },
                    category: {
                        name: 1
                    },
                    collection_nft: {
                        name: 1
                    },
                    currencies: {
                        name: 1,
                        image: 1
                    },
                    sales_types: {
                        name: 1
                    },
                    files_types: {
                        name: 1
                    },
                    create_date: 1,
                    price: 1,
                    likes: 1,
                }
            }    
        ]);
        
        res.status(200).json({
            ok: 'true',
            getAllNfts,
            total,
            end,
            countPages
        });
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
            msg: "Unexpected error"
        });
        console.log(error);
    };
};

const getNftById = async (req, res) =>{
    const { id } = req.params;
    try {
    
        const getById = await Nft.findById(id)
            .populate('category', { name:1, _id:0})
            .populate('collection_nft', { name:1, _id:0})
            .populate('currencies', { name:1, _id:0})
            .populate('sales_types', { name:1, _id:0})
            .populate('files_types', { name:1, _id:0})
            .populate('details.owner', { username:1, _id:0})
            .populate('details.user_creator', { username:1, _id:0})
        res.status(200).json( getById );   
    
    } catch (error) {
        res.status(404).json({
            ok: 'false',
            msg: 'Id Not Found'
        });
        console.log(error);
    };
};

const putNftUpdate = async (req, res) => {
    try {
        const nftUpdate = await Nft.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } //es para que nos devuelva el actualizado y no el anterior
        );
        res.json(nftUpdate);
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};

const deleteNft = async (req, res) => {
    const { id } = req.params;
    try {
        const nftDelete = await Nft.findByIdAndDelete(id);
        res.json(nftDelete);
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};

module.exports = { getAllNfts, createNft, putNftUpdate, deleteNft, getNftById };
