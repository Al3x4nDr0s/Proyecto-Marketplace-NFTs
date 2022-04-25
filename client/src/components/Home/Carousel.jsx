import React, { useState } from 'react';
import styled from "styled-components"



const StyledCarousel = styled.div`
    img{
        height: 900px;
        weight: 750px;
    }
`




function Carousel() {
    
    let images = [""]

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    console.log(selectedIndex)
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
            <img src={images[selectedIndex]} alt="" />
            <button onClick={previous}>{"<"} </button>
            <button onClick={next}>{">"} </button>
        </StyledCarousel>
    );
}

export default Carousel;