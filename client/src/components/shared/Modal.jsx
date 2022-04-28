import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    background: rgb(0,0,0);
    background: linear-gradient(162deg, rgba(0,0,0,0.47942927170868344) 0%, rgba(46,51,140,1) 49%, rgba(0,0,0,1) 100%); 
    border-radius: 10px;
    top: 0;
    left: 50;
    width: 350px;
    height: 90vh;
    ${(props)=> props.open ? "transform:translateX(0);":"transform:translateX(-100%);"}
    transition: transform 0.3s;
`



function Modal({ open, children, onClose }) {

    return (
        <Container open= {open} className="modalPortal">
            <div>

                {children}
                <button onClick={onClose}></button>
            </div>
        </Container>
    );
}

export default Modal;