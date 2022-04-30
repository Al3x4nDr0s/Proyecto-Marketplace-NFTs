import React from "react";

import { Card } from "./StylesHome/ViewNftStyles.jsx";

import { Link } from "react-router-dom";

import {
  ContainerDataCard,
  ContainerCategory,
} from "./StylesHome/ViewNftStyles.jsx";

import imagenaudio from "../../../assets/nft-audio.jpg";
import imagenvideo from "../../../assets/azuki-nft.gif";

export const CardNft = (props) => {
  const { image, name, price, id, category, files, currency, salestype } =
    props;

  // console.log(image);
  // console.log(id)
  return (
    <ContainerCategory>
      <Link style={{ textDecoration: "none" }} to={`/details/${id}`}>
        {files === "Image" ? (
          <Card backgroundImage={image} key={id}/>
        ) : files === "Video" ? (
          <Card backgroundImage={imagenvideo} key={id}/>
        ) : //   <video src={image} width="260px" height="300px"></video>
        files === "Audio" ? (
          <Card backgroundImage={imagenaudio} key={id}/>
        ) : null}
        {/* <Card backgroundImage={image} /> */}
        <ContainerDataCard>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ color: "#fff" }}>{name}</h3>
            <p
              style={{
                border: "2px solid var(--mainBackGroundButtonColor)",
                padding: ".2rem",
                borderRadius: ".3rem",
              }}
            >
              {salestype}
            </p>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", marginTop: ".5rem", color: "var(--colorInfo)"}}>
              <div>
                  <span>Precio Actual</span>
              </div>
            <div>
              <span style={{ color: "var(--colorInfo)" }}>{price}</span>
              <span style={{ color: "var(--colorInfo)" }}>
                {" "}
                {currency?.name}
              </span>
            </div>
          </div>
        </ContainerDataCard>
      </Link>
    </ContainerCategory>
  );
};
