import React from 'react';
import styled from "styled-components"

const ButtonStyled = styled.button`
    position: relative;
    display: inline-block;


`

function ButtonLanding(props) {

    const {onClick} = props
    return (
        <ButtonStyled onClick={onClick}>

            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
        </ButtonStyled>
    );
}

export default ButtonLanding;