import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    background-color: wheat;
    top: 10px;
    left: 10px;
    bottom:10px;
    width: 350px;
    height: 100vh;
    ${(props)=> props.open ? "transform:translateX(0);":"transform:translateX(-100%);"}
    transition: transform 0.3s;
`



function Modal({ open, children, onClose }) {

    return (
        <Container open= {open} className="modalPortal">
            <div>

                {children}
                <button onClick={onClose}>x</button>
            </div>
        </Container>
    );
}

export default Modal;