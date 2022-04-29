import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import {getNft} from '../../../redux/actions/index';

import styled from 'styled-components';

// const ContainerDetails = styled.div`
//     width: 85%;
//     margin: 0 auto;
// `;

export const DetailsNft = () => {
  
    // const { idNft } = useParams();

    // const nft = useSelector(state => state.nft)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getNft(idNft));
    // }, [])


    // console.log(nft)

    return (
    <div>
        <h2 style={{color: "var(--secondFontColor)"}}>Detalle NFT</h2>
    </div>
  )
}
