import React from "react";

import "./publicaciones.css";

import styled from "styled-components";

const ContainerMisPublicaciones = styled.div`
  width: 85%;
  margin: 6.5rem auto 0 auto;
  color: var(--secondFontColor);
`;

const ContainerPublicaciones = styled.div`
  width: 100%;
  height: 70vh;
  text-align: center;
  line-height: 70vh;
  margin: 2rem auto 0 auto;
  background-color: #181e5553;
`;

export const MisPublicaciones = () => {

  return (
    <ContainerMisPublicaciones>
      <>
      <h2>Mis Publicaciones</h2>
      <hr
        style={{
          borderColor: "var(--mainBackGroundButtonColor)",
          backgroundColor: "var(--mainBackGroundButtonColor)",
        }}
      />
            
      </>
      <ContainerPublicaciones><h1>In construction</h1></ContainerPublicaciones>
    </ContainerMisPublicaciones>
  );
};
