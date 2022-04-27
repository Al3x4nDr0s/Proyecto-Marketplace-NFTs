import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    background-color: wheat;
    top: 0;
    left: 0;
    width: 350px;
    height: 100vh;
    ${(props)=> props.open ? "transform:translateX(0);":"transform:translateX(-100%);"}
    transition: transform 0.3s;
`



function Modal({ open, children, onClose }) {

    return (
        <Container open= {open} className="modal">
            <div>

                {children}
                <button onClick={onClose}>x</button>
            </div>
        </Container>
    );
}

export default Modal;