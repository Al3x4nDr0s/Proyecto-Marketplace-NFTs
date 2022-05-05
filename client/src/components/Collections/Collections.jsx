import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getAllCollections, getAllNft } from '../../redux/actions/index';
import CardCollection from '../Collections/CardCollection';
import styled from 'styled-components';

const ColletionMain = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 7.5rem;
    background-color: red;
`
const CentrarCard = styled.div`
    margin: 0 12rem 0 12rem;
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

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
    
        <ColletionMain>
        <CentrarCard>
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
                }) : <div ><h2>Loading...</h2></div>
            } 
                </CentrarCard>
            </ColletionMain>
    
)













}


