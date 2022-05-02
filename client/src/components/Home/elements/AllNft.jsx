import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../../Loading/Loading.jsx";
import { getNftQuery } from "../../../redux/actions/index";


import { CardNft } from "./CardNft.jsx";

const ContainerAll = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
`;

const ContainerFilterNft = styled.div`
  width: 100%;
`;

const ContainerNft = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: .5rem;
  margin-left: 1rem;
`;

const ContainerFiltrosMain = styled.div`
  width: 80%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: .5rem;
  margin: 0 auto 2rem auto;
  background-color: #46198f53;
`;

// const ContainerLoading = styled.div`
//   background-color: red;
//   width: 50%;
//   margin: 0 auto;
// `

export const AllNft = () => {
  const nft = useSelector((state) => state.nftquery);
  const hasMore = useSelector((state) => state.hasMore);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const instantCallback = useCallback(dispatch, [dispatch])

  useEffect(() => {
    // if(nft.length === 0) {
      instantCallback(getNftQuery(page))
    // }
  }, [instantCallback, page]);

  const fecthNft = () => {
    setTimeout(() => {
      if (hasMore) {
        setPage((prevState) => prevState + 1);
      }
    }, 1000);
  };

  return (
    <>
      <ContainerFiltrosMain>
        <h2 style={{color: 'var(--secondFontColor)'}}>Filter in construction</h2>
      </ContainerFiltrosMain>
      <ContainerAll>
        <InfiniteScroll
          dataLength={nft?.length}
          next={fecthNft}
          hasMore={hasMore}
          loader={<h3 style={{color: 'var(--secondFontColor)', textAlign: 'center'}}>Loading...</h3>}
          endMessage={
            <p style={{ textAlign: 'center', color: 'var(--secondFontColor)' }}>
              Llegaste al final!
            </p>
          }
        >
          <ContainerNft>
            {nft?.map((x) => (
              <CardNft
                image={x.image}
                name={x.name}
                price={x.price}
                files={x.files_types?.name}
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
        </InfiniteScroll>
      </ContainerAll>
    </>
  );
};
