import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  ContainerDataCard,
  ContainerCategory,
} from "./StylesHome/ViewNftStyles.jsx";

import Swal from "sweetalert2";

import imagenaudio from "../../../assets/nft-audio.jpg";
import imagenvideo from "../../../assets/azuki-nft.gif";

const CardContainerNft = styled.div`
  width: 280px;
  height: 450px;
  border-radius: 10px;
  /* background-color: #14253d4e; */
  background-color: #46198f53;
  backdrop-filter: blur(5px);
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 2rem;
  position: relative;
`;

const CardingImg = styled.div`
  height: 55%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &::after {
    content: url(https://rvs-nft-preview-card.netlify.app/images/icon-view.svg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: hsla(178, 100%, 50%, 0.522);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    z-index: -1;
  }

  &:hover {
    ::after {
      z-index: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardBody = styled.div`
  height: 27%;
  color: hsl(215, 51%, 70%);
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid hsl(215, 32%, 27%);

  h4 {
    a {
      color: hsl(0, 0%, 100%);
      margin-bottom: 0;
      font-size: 18px;
      cursor: pointer;
      font-weight: 400;
    }
  }

  p {
    font-weight: 300;
  }
`;

const CardBodyFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  div {
    position: relative;
    padding-left: 18px;

    &:nth-child(1) {
      color: hsl(178, 100%, 50%);
    }
    &:nth-child(2) {
      padding-left: 22px;

      &:before {
        content: url(https://rvs-nft-preview-card.netlify.app/images/icon-clock.svg);
      }
    }

    /* &::before {
      content: url(https://rvs-nft-preview-card.netlify.app/images/icon-ethereum.svg);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0%, -50%);
      line-height: 0px;
    } */
  }
`;

const CardFooter = styled.div`
  height: 12%;
  display: flex;
  align-items: center;
  column-gap: 15px;

  img {
    width: 25px;
    height: 25px;
    border: 1px solid hsl(0, 0%, 100%);
    border-radius: 50%;
  }

  p {
    font-size: 14px;
    color: hsl(215, 51%, 70%);
    font-weight: 300;
  }

  span {
    margin-left: 5px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;

    &:hover {
      color: hsl(178, 100%, 50%);
    }
  }
`;

const PriceCard = styled.div`
  position: relative;
  padding-left: 18px;

  &:nth-child(1) {
    color: hsl(178, 100%, 50%);
  }
  &:nth-child(2) {
    padding-left: 22px;

    &:before {
      content: url(https://rvs-nft-preview-card.netlify.app/images/icon-clock.svg);
    }
  }
  &::before {
    content: url(https://rvs-nft-preview-card.netlify.app/images/icon-ethereum.svg);
    /* background-image: url('https://rvs-nft-preview-card.netlify.app/images/icon-ethereum.svg'); */
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    line-height: 0px;
  }
`;

const PruebaPrice = (props) => {
  const { title, priceN, image } = props;

  return (
    <PriceCard image={image}>
      {title} {priceN}
    </PriceCard>
  );
};

export const CardNft = (props) => {
  const {
    image,
    name,
    price,
    id,
    category,
    files,
    currency,
    salestype,
    owner,
    imageCurrencies,
  } = props;

  // const handlePhoto = () => {
  //   Swal.fire({

  //   })
  // }

  const handlePhoto = () => {
    if (files === "Image") {
      return `${image}`;
    }
    if (files === "Video") {
      return `${imagenvideo}`;
    }
    if (files === "Audio") {
      return `${imagenaudio}`;
    }
  };

  return (
    <CardContainerNft>
      <CardingImg
        onClick={() =>
          Swal.fire({
            imageUrl: `${handlePhoto()}`,
            imageHeight: 360,
            imageWidth: 400,
            title: `${name}`,
            color: 'var(--secondFontColor)',
            background: '#46198fb3',
            backdrop: `
            #46198f84
            `,
          })
        }
      >
        {files === "Image" ? (
          <img src={image} key={id} />
        ) : files === "Video" ? (
          <img src={imagenvideo} key={id} />
        ) : files === "Audio" ? (
          <img src={imagenaudio} key={id} />
        ) : null}
      </CardingImg>
      <CardBody>
        <h4>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/details/${id}`}
          >
            {name}
          </Link>
        </h4>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <CardBodyFooter>
          {/* <PriceCard>{price} {currency?.name}</PriceCard> */}
          {/* <PriceCard>{salestype}</PriceCard> */}
          <PruebaPrice
            // image={imageCurrencies}
            title={price}
            priceN={currency?.name}
          />
          <PruebaPrice title={salestype} />
        </CardBodyFooter>
      </CardBody>
      <CardFooter>
        <img src="https://rvs-nft-preview-card.netlify.app/images/image-avatar.png" />
        <p>
          Creation of{" "}
          <span onClick={() => alert("prueba de fuego")}> {owner} </span>
        </p>
      </CardFooter>
    </CardContainerNft>
    // <ContainerCategory>
    //   <Link style={{ textDecoration: "none" }} to={`/details/${id}`}>
    //     {files === "Image" ? (
    //       <Card backgroundImage={image} key={id}/>
    //     ) : files === "Video" ? (
    //       <Card backgroundImage={imagenvideo} key={id}/>
    //     ) : //   <video src={image} width="260px" height="300px"></video>
    //     files === "Audio" ? (
    //       <Card backgroundImage={imagenaudio} key={id}/>
    //     ) : null}
    //     {/* <Card backgroundImage={image} /> */}
    //     <ContainerDataCard>
    //       <div style={{ display: "flex", justifyContent: "space-between" }}>
    //         <h3 style={{ color: "#fff" }}>{name}</h3>
    //         <p
    //           style={{
    //             border: "2px solid var(--mainBackGroundButtonColor)",
    //             padding: ".2rem",
    //             borderRadius: ".3rem",
    //           }}
    //         >
    //           {salestype}
    //         </p>
    //       </div>
    //       <div style={{display: "flex", justifyContent: "space-between", marginTop: ".5rem", color: "var(--colorInfo)"}}>
    //           <div>
    //               <span>Precio Actual</span>
    //           </div>
    //         <div>
    //           <span style={{ color: "var(--colorInfo)" }}>{price}</span>
    //           <span style={{ color: "var(--colorInfo)" }}>
    //             {" "}
    //             {currency?.name}
    //           </span>
    //         </div>
    //       </div>
    //     </ContainerDataCard>
    //   </Link>
    // </ContainerCategory>
  );
};
