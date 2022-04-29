import React from 'react';
import styled from 'styled-components';
import {useNavigate, Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
<<<<<<< HEAD
import { setModalOpening } from '../../redux/actions';
import Button from '../shared/Button';
import {createPortal} from "react-dom"
import { IoMdCloseCircle } from "react-icons/io";
=======
import Modal from '../Modal.jsx';
import { setModalOpening } from '../../redux/actions';
import Button from '../shared/Button';
import {createPortal} from "react-dom"

import { IoApps } from "react-icons/io5";

>>>>>>> d95a4df05c08ffa8d6b8e61459dbb755cce82515
const StyledNav = styled.nav`
    display : flex;
    flex-direction: row;
    /* position: fixed; */
    top: 0;
    left: 0;
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
    list-style:none;
    a{
        &:hover{
            text-decoration-line: underline;
            text-decoration-thickness: 3px;
        }
    }
`;

<<<<<<< HEAD
// const styledIcon = styled.img`

// `
=======
const EtiquetaHamburgesa = styled.a`
    visibility: hidden;

    @media (max-width: 768px) {
        visibility: visible;
    }
`;

>>>>>>> d95a4df05c08ffa8d6b8e61459dbb755cce82515



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
        return createPortal(<IoMdCloseCircle className='modalIcon'/>, document.getElementById("modalPort"))
    }
    
    return (
        <StyledNav>
            
            <X/>
            <LogoContainer onClick={(e)=>handleLogoClick(e)}>
                <img src={require("../../assets/logo.png")} alt="not found" />
            </LogoContainer>
            <ButtonsContainer >
                <Link to={"/home"}>Home</Link>
                <Link to={"/home"}>About</Link>
                <Link to={"/home"}>Collections</Link>
                <EtiquetaHamburgesa style={{ cursor: "pointer"}}>< IoApps/></EtiquetaHamburgesa>
                {/* <Button onClick={handleModalClick} title={}/> */}
                <Button title={"Login"}/>

            </ButtonsContainer>
            
        </StyledNav>
        
    );
}

export default Header;