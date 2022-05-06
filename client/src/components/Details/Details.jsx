import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from 'axios';
import styled, { css } from "styled-components";
import { HiShare } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { SiEthereum } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { getAllNft } from "../../redux/actions";

export const Details = () => {
  //const {img, image, name, price, id, category, files, currency, salestype, owner, imageCurrencies } =props;
  const location = useLocation();
  const [like, setLike] = useState(false);
  
  console.log(location);
  const id = location.pathname.split("/")[2];
  const cards = useSelector((state) => state.nfts);
  const dispatch = useDispatch();
  const nft = cards.filter((item) => item._id === id);
  const [cantLikes, setCantLikes]= useState(nft[0].likes);
  console.log("Nuevo Renderizado");
  if(nft[0].sales_types.name==="Live Auction"){
    console.log("Nft con Subasta"); 
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    const auction = axios.get(`http://localhost:4000/auction/${nft[0]._id}`)
                         .then(res=>console.log(res.data))   
    
    /*let initTime = nft[0].sales_types.
        finalYear:
        finalMonth:
        finalDay:
        finalHour:
        finalMin:
        finalSeg:
        initYear:, initMonth, initDay, initHour, finalMin, finalSeg } 
        */
  }
  

useEffect(()=>{
    dispatch(getAllNft);
},[like,cantLikes]);

  const handleClick=(e)=>{
    
    
    if(nft[0].hasOwnProperty('likes')){
     like?setCantLikes(cantLikes-1) :setCantLikes(cantLikes+1);
     console.log(cantLikes);
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    axios.put(`http://localhost:4000/nft/${nft[0]._id}`,{likes:cantLikes})
    .then(res=>console.log(res.data));
    setLike(!like);

    }
    else{
        setCantLikes(0);

    }
    
   }
  
    
  return (
    <DetailsContainer>
      <Column>
        <Img img={nft[0].image} color='blue'  />
         <Row style={{ justifyContent: "space-between" }}>
          <h2>Description</h2>
          <IoIosArrowDown />
        </Row>
        <Row style={{ textAlign: "justify" }}>
          <p>{nft[0].description}</p>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <h2>Details</h2>
          <IoIosArrowDown />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Creator</p>
          <p>{nft[0].details.user_creator.username}</p>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Owner</p>
          <p>{nft[0].details.owner.username}</p>
        </Row>
        {/*<Row style={{justifyContent:'space-between'}}>
      <p>Network</p>
      <p>La atarraya</p>
      </Row>
    */}
        <Row style={{ justifyContent: "space-between" }}>
          <p>Smart Contract</p>
          <p>{nft[0].details.contract_address}</p>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Token Id</p>
          <p>{nft[0].details.token_id}</p>
        </Row>
      </Column>

      <Column1>
        <Row>
          <CollectionIcon src="https://public.nftstatic.com/static/nft/zipped/6a1d1afbc8654d64a8bbe6f8187a1f1e_zipped.png" />
        {
         nft[0].hasOwnProperty('collection_nft')&&<h3>{nft[0].collection_nft.name}</h3>
}
        </Row>
        <Row style={{ justifyContent: "left", gap: "50%", marginBottom:'0px', padding: '0px' }}>
          <Title>
            <h1>{nft[0].name}</h1>
            <p>{nft[0].category.name}</p>
          </Title>
          <LikeIcons  style={{ position:'absolute', top:'20%', left:'80%', padding:'0px', margin:'0px'}}>
            <HiShare
              style={{ width: "25px", height: "25px", cursor: "pointer", padding:'0px'}}
            />
            <BsFillSuitHeartFill
              onClick={handleClick}
              color={like ? "red" : "grey"}
              style={{ cursor: "pointer", width: "25px", height: "25px", padding:'0px' }}
            />
          </LikeIcons>
        </Row>
        <Row style={{position: 'absolute', top:'22%', left:'85%'}}>
         {nft[0].hasOwnProperty('likes')&&<p>{cantLikes}</p>
            }
        </Row>
        <Row style={{ justifyContent: "left", gap: "65%" }}>
          <p>Price</p>
        {nft[0].sales_types.name==="Live Auction"&&<p>Ends in</p>
        }
        </Row>
        <Row style={{ justifyContent: "left", gap: "53%" }}>
          <Row>
            <img
              src={nft[0].currencies.image}
              style={{ width: "20px", height: "20px" }}
            />
            <h2>{nft[0].price}</h2>
          </Row>
          {nft[0].sales_types.name==="Live Auction"&&<p> <small>days</small> 30 <small>hours</small> 15 <small>min</small>{" "}
            00 <small>secs</small></p>
          }
        </Row>

        <Row style={{ gap: "10%" }}>
          <Button1 title="Buy Now" height="40px" width="300px"></Button1>
          {nft[0].sales_types.name==="Live Auction"&&<Button1 title="Make Offer" height="40px" width="300px"></Button1>
            }
        </Row>

        <Row>
          <h3>Provenience</h3>
        </Row>
        <Row style={{ justifyContent: "space-around", textAlign: "left" }}>
          <h5>Name</h5>
          <h5>Action</h5>
          <h5>Trade Price</h5>
          <h5>Time</h5>
        </Row>
        <hr />
        <Row style={{ justifyContent: "space-around", textAlign: "left" }}>
          <p>Usuario1</p>
          <p>Purchased</p>
          <p>30.5 USDT</p>
          <p>2022-01-04 14:30:04</p>
        </Row>
        <Row style={{ justifyContent: "space-around", textAlign: "left" }}>
          <p>Usuario2</p>
          <p>Purchased</p>
          <p>25.8 USDT</p>
          <p>2022-01-04 14:30:04</p>
        </Row>
      </Column1>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 2%;
  
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  color: white;
  flex-wrap: wrap;
  
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 15%;
  width: 60%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: white;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: white;
`;

const Img = styled.div`
   background-image: url(${props => props.img});
   background-size: 100%;
   width: 400px;
   height: 400px;
   border-radius:5px;
   //background-color:${props=>props.color};
`;


const ImgNft = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 5%;
`;

const CollectionIcon = styled.img`
  height: 30px;
  width: 30px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const LikeIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 0.3rem;
  margin: ${(props) => props.margin || ".5rem 0 .8rem 0"};
  cursor: pointer;
  color: var(--secondFontColor);
  padding: ${(props) => props.padding || ".2rem 1.8rem"};
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
  outline: none;
  /* background: ${(props) => props.color || "#23136e"}; */
  background: ${(props) => props.color || "var(--mainBackGroundButtonColor)"};
  /* border: 1px solid ${(props) => props.color || "#23136e"}; */
  /* background: ${(props) => props.color || "#6d6a799f"}; */
  width: ${(props) => props.width || "60px"};
  height: ${(props) => props.height || "40px"};
  line-height: 30px;
  img {
    height: 20px;
  }

  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
        `
      : css`
          &:hover {
            background: white;
            transition: all 0.9s ease;
            color: ${(props) => props.color || "var(--mainFontColor)"};
          }
        `};
`;

const Button1 = ({
  disabled = false,
  title,
  onClick,
  padding,
  margin,
  width,
  height,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      title={title}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
