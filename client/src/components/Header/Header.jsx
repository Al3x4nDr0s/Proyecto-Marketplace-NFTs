import React from 'react';
import styled from 'styled-components';
import {useNavigate, Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal';
import { setModalOpening } from '../../redux/actions';
import Button from '../shared/Button';
import {createPortal} from "react-dom"

const StyledNav = styled.nav`
    display : flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    max-width: 100vw;
    width: 100%;
    padding: 10px 25px;    
    color : var(--secondFontColor);
    font-size: 18px;
    flex-wrap:wrap;
    border-radius: 15px;
    a{
        color: white;
        text-decoration: none;
    }
    
`;
const LogoContainer = styled.div`
    display: flex;
    cursor:pointer;

    img{
        height:100px;
        width: auto;
    }

    &:hover img{
        transform: scale(1.05)
    }

`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style:none;
    a{
        &:hover{
            text-decoration-line: underline;
            text-decoration-thickness: 3px;
        }
    }

`;


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleLogoClick(e){
        console.log("click")
        navigate("/home")
    }


    function handleModalClick(e){
        
        dispatch(setModalOpening(true))

    }
    function X(){
        return createPortal(<div>Portal</div>, document.querySelector(".modal"))
    }
    
    return (
        <StyledNav>
            <X/>
            <LogoContainer onClick={(e)=>handleLogoClick(e)}>
                <img src={require("./logo.png")} alt="not found" />
            </LogoContainer>
            <ButtonsContainer >
                <Link to={"/home"}>Home</Link>
                <Link to={"/home"}>About</Link>
                <Link to={"/home"}>Collections</Link>
                <Button onClick={handleModalClick} title={"Open modal"}/>
                <Button title={"Login"}/>

            </ButtonsContainer>
            
        </StyledNav>
        
    );
}

export default Header;