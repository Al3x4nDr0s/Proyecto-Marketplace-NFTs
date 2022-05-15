import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from 'axios';
import styled, { css, keyframes } from "styled-components";
import { HiShare } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { SiEthereum } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { getAllNft } from "../../redux/actions";
import Timer from "./Timer";
import imgAudio from '../../assets/nft-audio.jpg';
import imgVideo from '../../assets/azuki-nft.gif';
import {isMetamaskInstalledp, saldoWallet, payPurchase, searchWalletAddress} from './Metamask';
import Swal from 'sweetalert2';



const AuctionRequest = async(sales_type,)=>{
    
 
                      
};


export const Details = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const idNft = location.pathname.split("/")[2];
  const cards = useSelector((state) => state.nfts);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [infoTimer, setInfoTimer]=useState({startDate:'', finishDate:''});
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerItems, setTimerItems] = useState({d:'',h:'', m:'', s:''});
  const [offers, setOffers]=useState([]);
  const nft = cards.filter((item) => item._id === idNft);
  const [cantLikes, setCantLikes]= useState(nft[0].likes);
  const [errors, setErrors] = useState({auction:'false'});
  const [visibledisabled, setVisibleEnabled] = useState({description:false, details:false });
  const [account, setAccount] = useState(false);

  console.log("Nft Id: ", nft[0]._id);
  console.log("Nft Name: ", nft[0].name);
  
    useEffect(()=>{
    console.log("Entrando a UseEffect Auction");
    console.log(nft[0].sales_types.name);
    if((nft[0].sales_types.name==="Live Auction")){
      console.log("Entrando a Auction");
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      axios.get(`http://localhost:4000/offer/${idNft}`)
     
                          .then(res=>{
                          console.log(res.data);
                             if(res.data.getAuction.startDate&&res.data.getAuction.finishDate){
                             setInfoTimer({startDate: res.data.getAuction.startDate, finishDate:res.data.getAuction.finishDate});
                             setTimerEnabled(true);
                             setOffers(res.data.offers)
                            }
                          }).catch((e)=>{
                              console.log("Error: ", e.message)
                              setErrors({...errors, auctions:true});
                              setTimerEnabled(false);
                            })  
      }console.log("Nft no esta en Subasta");
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
  
  const handleVisibleDescripcionClick =()=>{
    setVisibleEnabled({...visibledisabled,description:!visibledisabled.description});
    
  };
  const handleVisibleDetailsClick =()=>{
    setVisibleEnabled({...visibledisabled,details:!visibledisabled.details});
    
    
  };

  const handlePayClick=async()=>{
    const acc = await isMetamaskInstalledp();
    if(acc){
      setAccount(acc);
      const saldo = await saldoWallet();
      const wallet = await searchWalletAddress(nft[0].details.owner._id);
      
      if(saldo>Number(nft[0].price)){
        console.log(nft[0].details.user_creator)
        let transact= {
          userId:nft[0].details.owner_id,
        nftId: nft[0]._id,
        currencies:nft[0].currencies._id,
        amount: nft[0].price,
        transaction_type:"6272dae3d6b583da5e6e5568"
      }
        const pay = await payPurchase(nft[0].price,wallet,transact);
        
        navigate('/home')
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Metamask Installed, but not connected!!!!',
          
        })
        //alert('Metamask Installed, but not connected!!!');
      }
     
     
    }


  };
  
 
 

  return (
    <DetailsContainer>
      <Column>
        <Row style={{ justifyContent: "center" }}>
        {
         nft[0].files_types.name==='Image'? <Img img={nft[0].image}   />
         : nft[0].files_types.name==='Video'? <Img img={imgVideo}   />
         : <Img img={imgAudio} />
        
        
        }

         {/*(<video width="400" height="400" controls autoplay='true'>
         <source src={nft[0].image} type="video/mp4"/>
        </video>)*/}
        </Row>
         <Row style={{ justifyContent: "space-between" }}>
          <h2>Description</h2>
          {visibledisabled.description?
          <IoIosArrowUp onClick={handleVisibleDescripcionClick} style={{cursor:'pointer'}}/> 
          :<IoIosArrowDown onClick={handleVisibleDescripcionClick} style={{cursor:'pointer'}}/>
          
        }
        </Row>
        {visibledisabled.description&&<Row style={{ textAlign: "justify" }}>
          <p style={{fontWeight:"lighter"}}>{nft[0].description}</p>
        </Row>}
        <Row style={{ justifyContent: "space-between" }}>
          <h2>Details</h2>
          {visibledisabled.details?
          <IoIosArrowUp onClick={handleVisibleDetailsClick} style={{cursor:'pointer'}}/>
          :<IoIosArrowDown onClick={handleVisibleDetailsClick} style={{cursor:'pointer'}}/>
          }
          </Row>
        
        {visibledisabled.details&&<Column>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Creator</p>
          <p style={{fontWeight:"lighter"}}>{nft[0].details.user_creator.username}</p>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Owner</p>
          <p style={{fontWeight:"lighter"}}>{nft[0].details.owner.username}</p>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Smart Contract</p>
          <p style={{fontSize:'12px', fontWeight:"lighter" }}>{nft[0].details.contract_address}</p>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <p>Token Id</p>
          <p style={{fontWeight:"lighter"}}>{nft[0].details.token_id}</p>
        </Row>
        </Column>
        }
        
      </Column>

      <Column1>
        <Row>
          <CollectionIcon src={nft[0].collection_nft?nft[0].collection_nft.image:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} />
        {
         nft[0].hasOwnProperty('collection_nft')&&<h3 style={{ backgroundColor:"#46198fb3", marginLeft: '10px',padding: '2px 5px',border:'none', borderRadius:'5px'}}>{nft[0].collection_nft.name}</h3>
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
        <Row style={{ justifyContent: "left", gap: "58%" }}>
          <Row>
            <img
              src={nft[0].currencies.image}
              style={{ width: "20px", height: "20px" }}
            />
            <h2>{nft[0].price}</h2>
          </Row>

          {
          nft[0].sales_types.name==="Live Auction"&&timerEnabled&&
          <Timer 
          startDate={infoTimer.startDate}
          finishDate={infoTimer.finishDate}
          setTimerItems = {setTimerItems}
           />
          }
          
        </Row>

        <Row style={{ gap: "15%", marginTop:'10px' }}>
        {nft[0].sales_types.name==="Fixed Price"&&<Button1 title="Buy Now" height="45px" width="350px" onClick={handlePayClick}></Button1>
        }
         
          {nft[0].sales_types.name==="Live Auction"&&<Button1 title="Make Offer" height="45px" width="350px"></Button1>
            }
        </Row>

        <Row>
          <h2 style={{ marginTop:"20px"}}>Provenience</h2>
        </Row>
        <hr />
        <table style={{color:'white', textAlign:'center', fontWeight:"lighter"}}>
            
        <tr>
          <th>Name</th>
          <th>Action</th>
          <th>Trade Price</th>
          <th>Timerade Price</th>
        </tr>

       {/* </Row> */}


        { offers.length>0&&offers.map(el=> (
         
        <tr>
          <td>{el.idUser.username}</td>
          <td>Offered</td>
          <td>{el.amount} {el.currency.name}</td>
          <td>{el.create_date}</td>
        </tr>

        
        

      ))}
       </table>
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
  width: 29%;
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

const Img = styled.div`
   background-image: url(${props => props.img});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   //background-size:100%;
   width: 380px;
   height: 380px;
   border-radius:8px;
   //background-color:${props=>props.color};
   //animation: animateDown infinite 1.5s;
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


