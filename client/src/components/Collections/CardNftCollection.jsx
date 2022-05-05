import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { filterNft } from '../../redux/actions/index.js';
import { CardNft } from "../Home/elements/CardNft";


export default function CardNftCollection() {
    const dispatch = useDispatch(); //las va a ejecutar a las actions, reemplaza el connect
   
    const {name} = useParams();
    console.log(name)
    // const navigate = useNavigate();



useEffect(() => { //cuando se monta, actualiza el componente
    dispatch(filterNft(name))
  }, [dispatch, name]) //el array son las dependecias


// function handleDelete() {
//     dispatch(deletePokemon(_id));
//     navigate('/home')
// };

const myNft = useSelector((state) => state.filterNfts);



return (
    <div >
        {myNft?.length ? (
          myNft
            
            .map(x => (
              
                <CardNft
                  image={x.image}
                  name={x.name}
                  price={x.price}
                  files={x.files_types.name}
                  category={x.category}
                  currency={x.currencies}
                  imageCurrencies={x.currencies.image}
                  owner={x.details.owner.username}
                  salestype={x.sales_types.name}
                  id={x._id}
                  key={x._id}
                />
             
            ))
        ): <div><h2>No hay NFTs para esta coleccion</h2></div>}
       
    </div>
)
};