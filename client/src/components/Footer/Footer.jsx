import React from "react";

import Input from "../shared/Input.jsx";

import styled from "styled-components";
// font-family: 'Kanit', sans-serif;

const ContainerFooter = styled.div`
  width: 100%;
  bottom: 0;
  height: 100%;
`;

const Footer = () => {
  return (
      <ContainerFooter>
        <h2>Subscribe Newsletter!</h2>
        <Input label="name" />
      </ContainerFooter>
  );
};

export default Footer;