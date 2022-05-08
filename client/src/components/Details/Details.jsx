import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from 'axios';
import styled, { css, keyframes } from "styled-components";
import { HiShare } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { SiEthereum } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { getAllNft } from "../../redux/actions";
import Timer from "./Timer";



const AuctionRequest = async(sales_type,)=>{
    
 
                      
};


export const Details = () => {
  console.log("Inicio");
  const location = useLocation();
  const idNft = location.pathname.split("/")[2];
  const cards = useSelector((state) => state.nfts);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [infoTimer, setInfoTimer]=useState({startDate:'5/4/2022 18:58', finishDate:'5/9/2022 18:58'});
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerItems, setTimerItems] = useState({d:'',h:'', m:'', s:''});
  
  const nft = cards.filter((item) => item._id === idNft);
  const [cantLikes, setCantLikes]= useState(nft[0].likes);
  
  console.log(nft[0]._id);
  console.log(nft[0].name);
  
  /*
  if((nft[0].sales_types.name==="Live Auction"&&!timerEnabled)){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    axios.get(`http://localhost:4000/auction/${idNft}`)
                         .then(res=>{
                           console.log(res.data[0]);
                           setInfoTimer({startDate: res.data[0].startDate, finishDate:res.data[0].finishDate});
                           setTimerEnabled(true);
                          })  
    console.log("Nft con Subasta");
   

  } */

  useEffect(()=>{
    if((nft[0].sales_types.name==="Live Auction")){
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      axios.get(`http://localhost:4000/auction/${idNft}`)
                           .then(res=>{
                             console.log(res.data[0]);
                             setInfoTimer({startDate: res.data[0].startDate, finishDate:res.data[0].finishDate});
                             setTimerEnabled(true);
                            })  
      console.log("Nft con Subasta");}
},[]);


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
          <CollectionIcon src={nft[0].collection_nft?nft[0].collection_nft.image:"https://cdn-icons-png.flaticon.com/512/2088/2088090.png"} />
        {
         nft[0].hasOwnProperty('collection_nft')&&<h3>{nft[0].collection_nft.name}</h3>
}
        </Row>
        <Row style={{ justifyContent: "left", gap: "50%", marginBottom:'0px', padding: '0px' }}>
          <Title>
            <h1>{nft[0].name}</h1>
            <p>{nft[0].category.name}</p>
          </Title>
          <LikeIcons  style={{ position:'absolute', top:'23%', left:'80%', padding:'0px', margin:'0px'}}>
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
        <Row style={{position: 'absolute', top:'25%', left:'85%'}}>
         {nft[0].hasOwnProperty('likes')&&<p>{cantLikes}</p>
            }
        </Row>
        <Row style={{ justifyContent: "left", gap: "65%", marginBottom:"10px"}}>
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

          {nft[0].sales_types.name==="Live Auction"&& infoTimer.finishDate!==''&&
         
          <Timer 
          startDate={infoTimer.startDate}
          finishDate={infoTimer.finishDate}
          setTimerItems = {setTimerItems}
           />
          }
          
        </Row>

        <Row style={{ gap: "15%", marginTop:'10px' }}>
          <Button1 title="Buy Now" height="45px" width="350px"></Button1>
          {nft[0].sales_types.name==="Live Auction"&&<Button1 title="Make Offer" height="45px" width="350px"></Button1>
            }
        </Row>

        <Row>
          <h2 style={{ marginTop:"20px"}}>Provenience</h2>
        </Row>
        <Row style={{ justifyContent: "space-around", textAlign: "left", display:"flex", marginRight:"40px"}}>
          <h3>Name</h3>
          <h3>Action</h3>
          <h3>Trade Price</h3>
          <h3>Time</h3>
        </Row>
        <hr />
        <Row style={{ justifyContent: "space-around", textAlign: "left", marginTop: "5px" , display:"flex"}}>
          <p>Usuario1</p>
          <p>Purchased</p>
          <p>30.5 USDT</p>
          <p>2022-01-04 14:30:04</p>
        </Row>
        <Row style={{ justifyContent: "space-around", textAlign: "left", marginTop: "5px" , display:"flex"}}>
          <p>Usuario2</p>
          <p>Purchased</p>
          <p>25.8 USDT</p>
          <p>2022-01-04 14:30:04</p>
        </Row>
      </Column1>
    </DetailsContainer>
  );

          }
              

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
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   
   width: 400px;
   height: 400px;
   border-radius:8px;
   //background-color:${props=>props.color};
   animation: animateDown infinite 1.5s;
`;




const ImgNft = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 5%;
`;

const CollectionIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius:50%;
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


