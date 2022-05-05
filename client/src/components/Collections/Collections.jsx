import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getAllCollections, getAllNft } from '../../redux/actions/index';
import CardCollection from '../Collections/CardCollection';



export default function Collections() {
const dispatch = useDispatch();
const selectorNfts = useSelector((state) => state.nfts)
const selectorCollections = useSelector((state) => state.collections);
// const nftCollections = useSelector((state) => state.filter(collection => collection.selectorCollections))

    useEffect(() => {
        dispatch(getAllCollections())
    },[])

    useEffect(() => {
        dispatch(getAllNft())
    },[])


return (
    <div>
        <div className='cards'>
            {
             selectorCollections.length > 0 ? selectorCollections.map((c) => {
                return (
                       <CardCollection
                         image={c.image}
                         name={c.name}
                         _id={c._id}
                         key={c._id}                       
                        />
                        )
                }) : <div className='loading'><h2>Loading...</h2></div>
            } 
                
            </div>
    </div>
)












}


