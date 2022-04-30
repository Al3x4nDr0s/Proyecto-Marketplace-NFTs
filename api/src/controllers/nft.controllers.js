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
        //? AGREGATE 
        const getAllNfts = await Nft.aggregate(
        //? array to object 
        [
            //? unwind 
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
                        name: 1
                    },
                    sales_types: {
                        name: 1
                    },
                    files_types: {
                        name: 1
                    }
                }
            }
        
            
        ]);
        res.status(200).json( getAllNfts );
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

const putNftUpdate = async (res, req) => {
    try {
        const nftUpdate = await Nft.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } //es para que nos devuelva el actualizado y no el anterior
        );
        res.json(nftUpdate);
    } catch (error) {
        res.status(404).json({error: 'could not be modified'});
    };
};

const deleteNft = async (req, res) => {
    const { id } = req.params;
    try {
        const nftDelete = await Nft.findByIdAndDelete(id);
        res.json(nftDelete);
    } catch (error) {
        res.status(404).json({error: 'could not delete'});
    };
};

module.exports = { getAllNfts, createNft, putNftUpdate, deleteNft, getNftById };
