import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.color || "#272640"};
  border-radius: 5px;
  cursor: pointer;
  color: var(--secondFontColor);
  padding: 20px 40px;
  outline: none;
  background: ${(props) => props.color || "#272640"};
  display: flex;
  img {
      height: 20px;
  }

  &:hover{
      background: white;
      color: ${(props) => props.color || "var(--mainFontColor)"};
      border: 1px solid ${(props) => props.color || "#312244"};
  }
`;

const InputDefault = styled.input`

`

const iconDictionary = {
    search: "https://cdn-icons-png.flaticon.com/512/64/64673.png",
}

export default function Button(props) {
  const { title, color, icon, onClick } = props;
  return <StyledButton color={color} onClick={onClick}>
      {icon && <img src={iconDictionary[icon] }/>}
      {title}
      </StyledButton>;
}
