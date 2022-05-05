import React from 'react';
import { Link } from 'react-router-dom';


//Card renderiza lo que necesito

export default function CardCollection({image, name, _id}) {
    

    return (
        <div>
            <Link to={'/home/collections/nfts/' + name}>
            <img className='image' src={image} alt='image' width='170px' height='180px'/>
            <div>
                <h5>Name</h5>
                <h3>{name}</h3>
            </div>
            </Link>
        </div>
    )
}