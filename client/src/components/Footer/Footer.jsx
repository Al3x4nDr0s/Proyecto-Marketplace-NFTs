import React from "react";

import Input from "../shared/Input.jsx";

import styled from "styled-components";

const ContainerFooter = styled.div`
  width: 100%;
  bottom: 0;
  height: 100%;
`;

const Footer = () => {

  return (
      <ContainerFooter>
        <h2>Subscribe Newsletter!</h2>
        <Input label="name" type="text"/>
      </ContainerFooter>
  );
};

export default Footer;