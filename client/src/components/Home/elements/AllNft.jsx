import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {CardNft} from './CardNft.jsx';


const ContainerAll = styled.div`
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 23% 77%;
    gap: 1rem;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
`;

const ContainerFilterNft = styled.div`
    width: 100%;
    
`

const ContainerNft = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .2rem;
  border-left: 1px solid var(--mainBackGroundButtonColor);
  padding: 0 3rem;
`

export const AllNft = () => {
  const nft = useSelector((state) => state.nfts);

  console.log(nft);


  const primerNft = nft[0]


  return (
    <ContainerAll>
      {/* <h1 style={{ color: "var(--secondFontColor)" }}>All NFT</h1> */}
      <ContainerFilterNft>
        <h2 style={{color: "var(--secondFontColor)"}}>Prueba Filtro</h2>
      </ContainerFilterNft>
      <ContainerNft>
      { nft?.map(x => (
        <CardNft
        image={x.image}
        name={x.name}
        price={x.price}
        files={x.files_types.name}
        category={x.category}
        currency={x.currencies}
        salestype={x.sales_types.name}
        id={x._id}
        key={x._id}
      />
      ))}
      </ContainerNft>
    </ContainerAll>
  );
};
