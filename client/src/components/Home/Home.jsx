import React, {useState} from 'react';
import Modal from '../shared/Modal.jsx';
import {useSelector, useDispatch} from "react-redux"
import { setModalOpening } from '../../redux/actions';
import styled from 'styled-components';


const HomeContainer = styled.div`
    
`
const MainSection = styled.section`
    /* background: rgb(71,17,137);
    background: linear-gradient(45deg, rgba(71,17,137,1) 0%, rgba(53,7,93,1) 49%, rgba(19,5,78,1) 100%); */
    height: 800px;
`

import {ViewNft} from './elements/ViewNft.jsx'


function Home() {
    const dispatch = useDispatch()
    const {isOpen} = useSelector(state=>({isOpen: state.isOpen}))



    return (
<<<<<<< HEAD
        <div>
            
        </div>
=======
        <HomeContainer>
            <Modal 
            
            open={isOpen}
            onClose={()=>dispatch(setModalOpening(false))}
            >
                
            </Modal>
            <MainSection>

            </MainSection>

        </HomeContainer>
>>>>>>> e6cf7011ab6241993b6712f047eb66423f40d778
    );
}

export default Home;