import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
//import InfiniteScroll from "react-infinite-scroll-component";
import { getAllNft } from "../../../redux/actions/index";

import Button from "../../shared/Button.jsx";

import { CardNft } from "./CardNft.jsx";

const ContainerAll = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 23% 77%;
  gap: 1rem;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
`;

const ContainerFilterNft = styled.div`
  width: 100%;
`;

const ContainerNft = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.2rem;
  border-left: 1px solid var(--mainBackGroundButtonColor);
  padding: 0 3rem;
  margin-bottom: 1rem;
`;

const ContainerButtonPrevNext = styled.div`
  width: 85%;
  height: 45px;
  /* display: flex; */
  /* align-items: center; */
  /* text-align: center; */
  display: flex;
  margin: 0 auto;
`;

export const AllNft = () => {
  const nft = useSelector((state) => state.nfts);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setPerPage] = useState(9);
  const [current, setCurrent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allnft, setNft] = useState([]);

  const pages = [];

  const dispatch = useDispatch();

  const instantCallback = useCallback(dispatch, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = nft.slice(indexOfFirstItem, indexOfLastItem);

  for (let i = 0; i < Math.ceil(nft.length / itemsPerPage); i++) {
    pages.push(i + 1);
  }

  useEffect(() => {
    if (nft.length === 0) {
      instantCallback(getAllNft());
      setLoading(false);
    }
    setNft(nft);
    setCurrent(currentItems);
  }, [instantCallback, nft, currentPage]);

  const handleNext = () => {
    // e.preventDefault();
    setCurrentPage((prev) => prev + 1);
    setCurrent([...current, currentItems]);
  };

  console.log(current);

  const handlePrev = () => {
    // e.preventDefault();
    setCurrentPage((prev) => prev - 1);
  };

  // console.log(allnft)
  return (
    <>
      <ContainerAll>
        {/* <h1 style={{ color: "var(--secondFontColor)" }}>All NFT</h1> */}
        <ContainerFilterNft>
          <h2 style={{ color: "var(--secondFontColor)" }}>Prueba Filtro</h2>
        </ContainerFilterNft>
        {/* <InfiniteScroll
        dataLength={allnft?.length}
        next={handleNext}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      > */}
        <ContainerNft>
          {currentItems?.map((x) => (
            <CardNft
              image={x.image}
              name={x.name}
              price={x.price}
              files={x.files_types.name}
              category={x.category}
              currency={x.currencies}
              imageCurrencies={x.currencies.image}
              owner={x.details.owner.username}
              salestype={x.sales_types.name}
              id={x._id}
              key={x._id}
            />
          ))}
        </ContainerNft>

        {/* </InfiniteScroll> */}
      </ContainerAll>
      <ContainerButtonPrevNext>
        <div
          style={{
            margin: "0 55%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: ".3rem",
              margin: ".5rem 0 .8rem 0",
              cursor: "pointer",
              color: "var(--secondFontColor)",
              padding: ".2rem 1.8rem",
              outline: "none",
              background: "var(--mainBackGroundButtonColor)",
            }}
            onClick={handlePrev}
            disabled={currentPage === pages[0] ? true : false}
          >
            prev
          </button>
          <button
            style={{
              border: "none",
              borderRadius: ".3rem",
              margin: ".5rem 0 .8rem 0",
              cursor: "pointer",
              color: "var(--secondFontColor)",
              padding: ".2rem 1.8rem",
              outline: "none",
              background: "var(--mainBackGroundButtonColor)",
            }}
            onClick={handleNext}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            next
          </button>
          {/* <Button onClick={handlePrev} disabled={currentPage === pages[0] ? true : false} title={"prev"} /> */}
          {/* <Button onClick={handleNext} disabled={true} title={"next"} /> */}
        </div>
      </ContainerButtonPrevNext>
    </>
  );
};
