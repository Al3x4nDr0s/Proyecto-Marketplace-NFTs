import React from 'react';
import styled from "styled-components"

const WhoWeAreContainer = styled.div`
    height: 750px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--secondFontColor);
    margin-top: 120px;
    .img-container{
        padding: 30px;
        width: 50%;
        height: 100%;
        justify-content: center;
        align-items: center;
        
    }
    .description-container{
        padding: 30px;
        width: 50%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        .img-container{
        padding: 20px;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .description-container{
        padding: 20px;
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    }
`

const About = () => {


    return (
        <WhoWeAreContainer className='about-container'>
            <div className='img-container'>
                <img src="" alt="About Us" />
            </div>
            <div className='description-container'>
                <h1>Who we are</h1>
                <p>7devNFT was born from an initiave of continuosly looking to be the most reliable platform in the market by provinding the quickest and the most secure transactions, our mission is to take financially freedom to any person that has a computer at home by investing in NFT just with a few clicks of a mouse and this is not the end we also strive to give to our users liberty on creating personalized NFTs where you can choose the desing and publish your own NFT </p>
            </div>
        </WhoWeAreContainer>
    );
};

export default About;