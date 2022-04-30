import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {CardNft} from './CardNft.jsx';


const ContainerAllNft = styled.div`
    width: 85%;
    margin: 0 auto;
`;

export const AllNft = () => {
  const nft = useSelector((state) => state.nfts);

  console.log(nft);


  const primerNft = nft[0]


  return (
    <ContainerAllNft>
      <h1 style={{ color: "var(--secondFontColor)" }}>All NFT</h1>
      <CardNft
        image={primerNft.image}
        name={primerNft.name}
        price={primerNft.price}
        files={primerNft.files_types.name}
        category={primerNft.category}
        currency={primerNft.currencies}
        salestype={primerNft.sales_types.name}
        id={primerNft._id}
        key={primerNft._id}
      />
    </ContainerAllNft>
  );
};
