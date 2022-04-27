import React, {useState} from 'react';
import Modal from '../shared/Modal';
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

function Home() {
    const dispatch = useDispatch()
    const {isOpen} = useSelector(state=>({isOpen: state.isOpen}))



    return (
        <HomeContainer>
            <Modal 
            
            open={isOpen}
            onClose={()=>dispatch(setModalOpening(false))}
            >
                
            </Modal>
            <MainSection>

            </MainSection>

        </HomeContainer>
    );
}

export default Home;