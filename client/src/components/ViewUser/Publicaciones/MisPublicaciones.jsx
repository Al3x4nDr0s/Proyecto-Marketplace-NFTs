import React from "react";
import { ethers } from "ethers";
import contract from "../../Contract/Contrato-NFT/contracts/contract.json";
import "./publicaciones.css";
import { contratcToken } from "../../../redux/actions/index";

import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../../shared/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const contractAddress = "0x301e98022EcccA30a656bC090C0342044cb81bC6";
const abi = contract.abi;

const ContainerMisPublicaciones = styled.div`
  width: 85%;
  margin: 6.5rem auto 0 auto;
  color: var(--secondFontColor);
`;

const ContainerPublicaciones = styled.div`
  width: 100%;
  height: 70vh;
  text-align: center;
  border-radius: 0.3rem;
  line-height: 68vh;
  margin: 2rem auto 0 auto;
  background-color: #181e5553;
`;

const ContainerHeaderPublicaciones = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MisPublicaciones = () => {
  const dispatch = useDispatch();
  const [currentAccount, setCurrentAccount] = useState();
  const contract = useSelector((state) => state.contract);

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        const contratoNft = nftContract.address; //// Aca almacenas el numero de contrato del NFT.

        dispatch(contratcToken(contratoNft));

        const tokenNft = await provider.getBlockNumber(); /// Aca almacenas el numero de Token del NFT.
        dispatch(contratcToken(tokenNft));

        console.log("Initialize payment");
        let nftTxn = await nftContract.mint(
          "0x41f532bED9dF43eb4895c4ddc9A756ED568E761d",
          1,
          {
            value: ethers.utils.parseEther("0.01"),
          }
        );
        console.log("Mining... please wait");
        await nftTxn.wait();
        console.log(`Mined, transaction hash: ${nftTxn.hash}`);
        alert("Contract and Token successfully created");
      } else {
        console.log("Ethereum object does not exit");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    mintNftHandler();
    navigate("/home/createnft", { state: { contract } });
  };

  return (
    <ContainerMisPublicaciones>
      <>
        <ContainerHeaderPublicaciones>
          <h2>Mis Publicaciones</h2>
          <Button title="CREATE NFT" onClick={() => handleClick()} />
        </ContainerHeaderPublicaciones>
        <hr
          style={{
            borderColor: "var(--mainBackGroundButtonColor)",
            backgroundColor: "var(--mainBackGroundButtonColor)",
          }}
        />
      </>
      <ContainerPublicaciones>
        <h1>No tiene nft creados</h1>
      </ContainerPublicaciones>
    </ContainerMisPublicaciones>
  );
};
