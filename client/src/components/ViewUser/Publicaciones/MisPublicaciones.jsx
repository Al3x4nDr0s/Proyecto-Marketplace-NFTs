import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllNft } from "../../../redux/actions/index";


import styled from "styled-components";

const ContainerMisPublicaciones = styled.div`
  width: 85%;
  margin: 0 auto;
  color: var(--secondFontColor);
`;

const ContainerPublicacion = styled.div`
  display: flex;
`;

export const MisPublicaciones = () => {
  const nft = useSelector((state) => state.nft);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNft());
  }, []);
   
  return (
    <ContainerMisPublicaciones>
      <h2>Mis Publicaciones</h2>
      <hr
        style={{
          borderColor: "var(--mainBackGroundButtonColor)",
          backgroundColor: "var(--mainBackGroundButtonColor)",
        }}
      />
      {/* {nft?.map((x) => (
        <ContainerPublicacion>
          <img src={x.image} style={{ width: "240px", height: "230px" }} />
          <div>
            <h3>{x.name}</h3>
            <div>
              <p>{x.sales_types.name}</p>
              <p>{x.price}</p>
            </div>
          </div>
        </ContainerPublicacion>
      ))} */}
    </ContainerMisPublicaciones>
  );
};
