import React, { useState } from 'react';
import styled from "styled-components"



const StyledCarousel = styled.div`
    display : flex;
    flex-direction: row;
    margin: 20px auto;
    height: 500px;
    width: 800px;
    button{
        font-size: 30px;
        border: none;
        width: 20px;
        cursor:pointer;
        background:transparent;
    }
    img{
        height: 100%;
        width: 100%;
    }
`


function Carousel() {
    
    let images = ["https://img.etimg.com/thumb/msid-89705853,width-650,imgsize-44124,,resizemode-4,quality-100/crypto.jpg","https://phantom-marca.unidadeditorial.es/0cec36df05a4e7d6d9126fbed7950a9f/crop/0x0/2041x1150/resize/828/f/webp/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg","https://image.shutterstock.com/image-vector/crypto-currencycrypto-currency-coin-international-600w-2044413572.jpg"]

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    const selectNewImage = ( index, images, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
    }

    const previous = ()=>{
        selectNewImage(selectedIndex, images, false)
        
    }
    const next = ()=>{
        selectNewImage(selectedIndex, images)
    }

    return (
        <StyledCarousel>
            <button onClick={previous}>{"<"} </button>
            <img src={selectedImage} alt="not found" />
            <button onClick={next}>{">"} </button>
        </StyledCarousel>
    );
}

export default Carousel;