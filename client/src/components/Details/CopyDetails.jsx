import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import styled, { css, keyframes } from "styled-components";
import { HiShare } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { SiEthereum } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { getAllNft } from "../../redux/actions";
import Timer from "./Timer";
import imgAudio from "../../assets/nft-audio.jpg";
import imgVideo from "../../assets/azuki-nft.gif";
import Metamask from "./Metamask.jsx";

const AuctionRequest = async (sales_type) => {};

export const Details = () => {
  console.log("Inicio");
  const location = useLocation();
  const idNft = location.pathname.split("/")[2];
  const cards = useSelector((state) => state.nfts);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [infoTimer, setInfoTimer] = useState({ startDate: "", finishDate: "" });
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerItems, setTimerItems] = useState({ d: "", h: "", m: "", s: "" });
  const [offers, setOffers] = useState([]);
  const nft = cards.filter((item) => item._id === idNft);
  const [cantLikes, setCantLikes] = useState(nft[0].likes);
  const [errors, setErrors] = useState({ auction: "false" });
  const [visibledisabled, setVisibleEnabled] = useState({
    description: false,
    details: false,
  });

  // console.log(nft[0]._id);
  // console.log(nft[0].name);

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

  useEffect(() => {
    console.log("Entrando a UseEffect Auction");
    console.log(nft[0].sales_types.name);
    if (nft[0].sales_types.name === "Live Auction") {
      console.log("Entrando a Auction");
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
      axios
        .get(`https://sevendevs-backend.herokuapp.com/offer/${idNft}`)

        .then((res) => {
          console.log(res.data);
          if (res.data.getAuction.startDate && res.data.getAuction.finishDate) {
            setInfoTimer({
              startDate: res.data.getAuction.startDate,
              finishDate: res.data.getAuction.finishDate,
            });
            setTimerEnabled(true);
            setOffers(res.data.offers);
          }
        })
        .catch((e) => {
          console.log("Error: ", e.message);
          setErrors({ ...errors, auctions: true });
          setTimerEnabled(false);
        });
    }
    console.log("Nft no esta en Subasta");
  }, []);

  useEffect(() => {
    dispatch(getAllNft);
  }, [like, cantLikes]);

  const handleClick = (e) => {
    if (nft[0].hasOwnProperty("likes")) {
      like ? setCantLikes(cantLikes - 1) : setCantLikes(cantLikes + 1);
      console.log(cantLikes);
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
      axios
        .put(`https://sevendevs-backend.herokuapp.com/nft/${nft[0]._id}`, {
          likes: cantLikes,
        })
        .then((res) => console.log(res.data));
      setLike(!like);
    }
  };

  const handleVisibleDescripcionClick = () => {
    setVisibleEnabled({
      ...visibledisabled,
      description: !visibledisabled.description,
    });
  };
  const handleVisibleDetailsClick = () => {
    setVisibleEnabled({
      ...visibledisabled,
      details: !visibledisabled.details,
    });
  };

  const handlePayClick = () => {
    console.log("Entrando a Click");
    return <Metamask />;
  };

  return (
    <DetailsContainer>
      <Column>
        <Row>
          {nft[0].files_types.name === "Image" ? (
            <Img img={nft[0].image} />
          ) : nft[0].files_types.name === "Video" ? (
            <Img img={imgVideo} />
          ) : (
            <Img img={imgAudio} />
          )}
        </Row>
        <RowDetails>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>Details</h2>
            {visibledisabled.details ? (
              <IoIosArrowUp
                onClick={handleVisibleDetailsClick}
                style={{
                  cursor: "pointer",
                  color: "var(--mainBackGroundButtonColor)",
                  width: "30px",
                  height: "30px",
                }}
              />
            ) : (
              <IoIosArrowDown
                onClick={handleVisibleDetailsClick}
                style={{
                  cursor: "pointer",
                  color: "var(--mainBackGroundButtonColor)",
                  width: "30px",
                  height: "30px",
                }}
              />
            )}
          </div>
          {visibledisabled.details && (
            <Column>
              <Row style={{ justifyContent: "space-between" }}>
                <p>Creator</p>
                <p style={{ fontWeight: "lighter" }}>
                  {nft[0].details.user_creator.username}
                </p>
              </Row>
              <Row style={{ justifyContent: "space-between" }}>
                <p>Owner</p>
                <p style={{ fontWeight: "lighter" }}>
                  {nft[0].details.owner.username}
                </p>
              </Row>
              <Row style={{ justifyContent: "space-between" }}>
                <p>Smart Contract</p>
                <p style={{ fontSize: "12px", fontWeight: "lighter" }}>
                  {nft[0].details.contract_address}
                </p>
              </Row>
              <Row style={{ justifyContent: "space-between" }}>
                <p>Token Id</p>
                <p style={{ fontWeight: "lighter" }}>
                  {nft[0].details.token_id}
                </p>
              </Row>
            </Column>
          )}
        </RowDetails>
      </Column>

      <ContenedorDerecho>
        <ContenedorCollectionDetails>
          <CollectionIcon
            src={
              nft[0].collection_nft
                ? nft[0].collection_nft.image
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
            }
          />
          {nft[0].hasOwnProperty("collection_nft") && (
            <h3
              style={{
                backgroundColor: "#46198fb3",
                marginLeft: "10px",
                padding: "2px 5px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {nft[0].collection_nft.name}
            </h3>
          )}
        </ContenedorCollectionDetails>
        <ContainerTittleNftDetails>
          <Title>
            <h1>{nft[0].name}</h1>
            <p
              style={{
                color: "#46198fb3",
                textAlign: "center",
                fontWeight: "700",
                backgroundColor: "#afaeae",
                borderRadius: ".25rem",
              }}
            >
              {nft[0].category.name}
            </p>
          </Title>
          <LikeIcons>
            <HiShare
              style={{
                width: "25px",
                height: "25px",
                cursor: "pointer",
                padding: "0px",
              }}
            />
            <div style={{ display: "flex", gap: ".4rem" }}>
              <BsFillSuitHeartFill
                onClick={handleClick}
                color={like ? "red" : "grey"}
                style={{
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                  padding: "0px",
                }}
              />
              {nft[0].hasOwnProperty("likes") && <p>{cantLikes}</p>}
            </div>
          </LikeIcons>
        </ContainerTittleNftDetails>
        <RowDescription>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>Description</h2>
            {visibledisabled.description ? (
              <IoIosArrowUp
                onClick={handleVisibleDescripcionClick}
                style={{
                  cursor: "pointer",
                  color: "var(--mainBackGroundButtonColor)",
                  width: "30px",
                  height: "30px",
                }}
              />
            ) : (
              <IoIosArrowDown
                onClick={handleVisibleDescripcionClick}
                style={{
                  cursor: "pointer",
                  color: "var(--mainBackGroundButtonColor)",
                  width: "30px",
                  height: "30px",
                }}
              />
            )}
          </div>
          {visibledisabled.description && (
            <Row style={{ textAlign: "justify" }}>
              <p style={{ fontWeight: "600", color: "var(--colorInfo)" }}>
                {nft[0].description}
              </p>
            </Row>
          )}
        </RowDescription>

        <ContainerContadorAndPrice>
          <RowPrice>
            <p style={{ color: "var(--colorInfo)", fontWeight: "700" }}>
              Price
            </p>
            <Row>
              <img
                src={nft[0].currencies.image}
                style={{ width: "20px", height: "20px" }}
              />
              <h2>{nft[0].price}</h2>
              <h2>{nft[0].currencies.name}</h2>
            </Row>
            {
              nft[0].currencies.name === "USDT"
              ?  <p style={{color: "var(--colorInfo)"}}>= ${(nft[0].price * 1)} USD</p>
              : nft[0].currencies.name === "ETH"
              ? <p style={{color: "var(--colorInfo)"}}>= ${(nft[0].price * 2008)} USD</p>
              : <p style={{color: "var(--colorInfo)"}}>= ${(nft[0].price * 287.34)} USD</p>
            }
           
          </RowPrice>
          <RowContador>
            {nft[0].sales_types.name === "Live Auction" && (
              <p
                style={{
                  color: "var(--colorInfo)",
                  fontWeight: "700",
                  textAlign: "justify",
                }}
              >
                Ends in
              </p>
            )}

            {nft[0].sales_types.name === "Live Auction" && timerEnabled && (
              <Timer
                startDate={infoTimer.startDate}
                finishDate={infoTimer.finishDate}
                setTimerItems={setTimerItems}
              />
            )}
          </RowContador>
        </ContainerContadorAndPrice>

        <ContainerBtnPay>
          <Button1
            title="Buy Now"
            height="45px"
            width="45%"
            onClick={handlePayClick}
          ></Button1>
          {nft[0].sales_types.name === "Live Auction" && (
            <Button1 title="Make Offer" height="45px" width="45%"></Button1>
          )}
        </ContainerBtnPay>

        <Row>
          <h2 style={{ marginTop: "20px" }}>Provenience</h2>
        </Row>
        <hr />
        <table
          style={{ color: "white", textAlign: "center", fontWeight: "lighter" }}
        >
          <tr>
            <th>Name</th>
            <th>Action</th>
            <th>Trade Price</th>
            <th>Timerade Price</th>
          </tr>

          {/* </Row> */}

          {offers.length > 0 &&
            offers.map((el) => (
              <tr>
                <td>{el.idUser.username}</td>
                <td>Offered</td>
                <td>
                  {el.amount} {el.currency.name}
                </td>
                <td>{el.create_date}</td>
              </tr>
            ))}
        </table>
      </ContenedorDerecho>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  width: 83%;
  margin: 8.5rem auto 3rem auto;
  display: grid;
  grid-template-columns: 25% 72%;
  gap: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: var(--secondFontColor);
  flex-wrap: wrap;
`;

const ContenedorDerecho = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContenedorCollectionDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  color: white;
`;

const ContainerContadorAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const RowPrice = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 0.4rem;
  color: white;
`;

const RowContador = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: white;
`;

const ContainerBtnPay = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

// const RowBtnPay = styled.div``;

const RowDescription = styled.div`
  gap: 0.4rem;
  padding: 0.5rem;
  border-radius: 0.45rem;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e2e230;
`;

const RowDetails = styled.div`
  gap: 0.4rem;
  padding: 0.5rem;
  border-radius: 0.45rem;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e2e230;
`;

const ContainerTittleNftDetails = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 380px;
  height: 380px;
  border-radius: 0.4rem;
`;

const ImgNft = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 5%;
`;

const CollectionIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0.9rem;
`;

const LikeIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
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
  background: ${(props) => props.color || "var(--mainBackGroundButtonColor)"};
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
