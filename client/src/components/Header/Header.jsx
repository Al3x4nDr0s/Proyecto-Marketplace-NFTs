import React from 'react';
import styled from 'styled-components';
import {useNavigate, Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import Modal from '../Modal.jsx';
import { setModalOpening } from '../../redux/actions';
import Button from '../shared/Button';
import {createPortal} from "react-dom"

import { IoApps } from "react-icons/io5";

const StyledNav = styled.nav`
    display : flex;
    flex-direction: row;
    /* position: fixed; */
    /* top: 0;
    left: 0; */
    /* background-color: var(--mainContainersColor); */
    align-items: center;
    justify-content: space-between;
    height: 85px;
    max-width: 100vw;
    width: 100%;
    padding: 10px 25px;  
    margin-bottom: 1.5rem;  
    color : var(--secondFontColor);
    font-size: 18px;
    flex-wrap:wrap;
    a{
        color: white;
        text-decoration: none;
    }
    
`;
const LogoContainer = styled.div`
    display: flex;
    cursor:pointer;
    margin-left: 3.8rem;
    img{
        height:70px;
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
    margin-right: 4.5rem;
    list-style:none;
    a{
        &:hover{
            text-decoration-line: underline;
            text-decoration-thickness: 3px;
        }
    }
`;

const EtiquetaHamburgesa = styled.a`
    visibility: visible;

    @media (max-width: 768px) {
        visibility: visible;
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
            
            <LogoContainer onClick={(e)=>handleLogoClick(e)}>
                <img src={require("../../assets/logo.png")} alt="not found" />
            </LogoContainer>
            <ButtonsContainer >
                <Link to={"/home"}>Home</Link>
                <Link to={"/home"}>About</Link>
                <Link to={"/home"}>Collections</Link>
                <EtiquetaHamburgesa style={{ cursor: "pointer"}} onClick={handleModalClick}>< IoApps/></EtiquetaHamburgesa>
                <Button title={"LOGIN"} onClick={() => navigate('/home/login')}/>
                <Button title={"REGISTER"}/>

            </ButtonsContainer>
            
        </StyledNav>
        
    );
}

export default Header;