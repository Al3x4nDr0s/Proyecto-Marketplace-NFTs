import React, {useState} from 'react';
<<<<<<< HEAD
import Modal from '../shared/Modal';
=======
// import Modal from '../shared/Modal.jsx';
>>>>>>> d95a4df05c08ffa8d6b8e61459dbb755cce82515
import {useSelector, useDispatch} from "react-redux"
import { setModalOpening } from '../../redux/actions';
import styled from 'styled-components';
import {ViewNft} from './elements/ViewNft.jsx'

const HomeContainer = styled.div`
    
    `
const MainSection = styled.section`
    /* background: rgb(71,17,137);
    background: linear-gradient(45deg, rgba(71,17,137,1) 0%, rgba(53,7,93,1) 49%, rgba(19,5,78,1) 100%); */
<<<<<<< HEAD
    height: 800px;
    `
=======
    /* height: 800px; */
`
const HomeTitle = styled.div`
    color: var(--secondFontColor)
`;

>>>>>>> d95a4df05c08ffa8d6b8e61459dbb755cce82515

function Home() {
    /* const dispatch = useDispatch()
    const {isOpen} = useSelector(state=>({isOpen: state.isOpen})) */



    return (
        <HomeContainer>
            {/* <Modal 
            
            
            open={isOpen}
            onClose={()=>dispatch(setModalOpening(false))}
            >
                
            </Modal> */}

            <MainSection>
            <HomeTitle/>
                <ViewNft />
            </MainSection>

        </HomeContainer>
    );
}

export default Home;