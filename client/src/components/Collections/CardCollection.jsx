import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerCollectionCard = styled.div `
width: 220px;
height: 250px;
background-color: #46198f53;
margin-bottom: 5rem;

`

//Card renderiza lo que necesito

export default function CardCollection({image, name, _id}) {
 

    return (
        <ContainerCollectionCard>
            <Link to={'/home/collections/nfts/' + name}>
            <img className='image' src={image} alt='image' width='170px' height='180px'/>
            <div>
                <h5>Name</h5>
                <h3>{name}</h3>
            </div>
            </Link>
        </ContainerCollectionCard>
    )
}