import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { getAllNft } from "../../../redux/actions/index";

import "./publicaciones.css";

import styled from "styled-components";

// import { CardImg } from "../elements/StyleViewUser.jsx";
import {Loading} from "../../Loading/Loading.jsx";


const ContainerMisPublicaciones = styled.div`
  width: 85%;
  margin: 0 auto;
  color: var(--secondFontColor);
`;

// const ContainerPublicacion = styled.div`
//   display: flex;
// `;

export const MisPublicaciones = () => {
  // const nft = useSelector((state) => state.nft);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllNft());
  // }, [dispatch]);

  return (
    <ContainerMisPublicaciones>
      <>
      <h2>Mis Publicaciones</h2>
      <hr
        style={{
          borderColor: "var(--mainBackGroundButtonColor)",
          backgroundColor: "var(--mainBackGroundButtonColor)",
        }}
      />
      
      <Loading/>
      
      </>
      {/* <>
        <CardContainerNft>
          <CardingImg>
            <img src="https://rvs-nft-preview-card.netlify.app/images/image-equilibrium.jpg" />
          </CardingImg>
          <CardBody>
            <h4>Equilibrium #3429</h4>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <CardBodyFooter>
              <div>0.041 ETH</div>
              <div>3 days left</div>
            </CardBodyFooter>
          </CardBody>
          <CardFooter>
            <img
              src="https://rvs-nft-preview-card.netlify.app/images/image-avatar.png"
              alt=""
            />
            <p>
              Creation of <span> Jules Wyvern </span>
            </p>
          </CardFooter>
        </CardContainerNft>
      </> */}
      {/* {nft?.map((x) => (
        <ContainerPublicacion>
          <img src={x.image} style={{ width: "240px", height: "230px" }} />
          <div>
            <h3>{x.name}</h3>
            <div>
              <p>{x.sales_types.name}</p>
              <p>{x.price}</p>
            </div>
          </div>
        </ContainerPublicacion>
      ))} */}
    </ContainerMisPublicaciones>
  );
};
