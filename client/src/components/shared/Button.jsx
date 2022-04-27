import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.color || "var(--mainBackGroundButtonColor)"};
  border-radius: .5rem;
  margin: .5rem 0 .8rem 0;
  cursor: pointer;
  color: var(--secondFontColor);
  display: flex;
  img {
      height: 20px;
  }

  &:hover{
      background: white;
      transition: all .9s ease;
      color: ${(props) => props.color || "var(--mainFontColor)"};
  }
`;

const iconDictionary = {
    search: "https://cdn-icons-png.flaticon.com/512/64/64673.png",
}

export default function Button(props) {
  const { title, color, icon, onClick, padding, width } = props;
  return <StyledButton color={color} onClick={onClick} width={width} padding={padding}>
      {icon && <img src={iconDictionary[icon] }/>}
      {title}
      </StyledButton>;
}
