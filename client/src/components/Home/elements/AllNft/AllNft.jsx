import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../../../Loading/Loading.jsx";
import { getNftQuery } from "../../../../redux/actions/index";

import { CardNft } from "../CardNft/CardNft.jsx";
import CategoryFilter from "./filters/CategoryFilter.jsx";
import CurrenciesFilter from "./filters/CurrenciesFilter.jsx";
import SalesFilter from "./filters/SalesFilter.jsx";
import FilesTypeFilter from "./filters/FilesTypeFilter.jsx";

const ContainerAll = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
`;

// const ContainerFilterNft = styled.div`
//   width: 100%;
  
// `;

const ContainerNft = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-left: 1rem;
`;

const ContainerFiltrosMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 0.5rem;
  margin: 0 auto 2rem auto;
  background-color: #46198f53;
  padding: 20px;
  select{
    outline: 0;
    box-shadow: none;
    border: 0;
    background-color: rgba(71, 17, 137, 1);
    color: var(--secondFontColor);
    border-radius: 10px;
    padding: 6px;
    height: 70%;
  }

  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 250px;
    padding: 30px;
    
    select{
      width: 100%;
    }

  }
  
  
`;

const ContainerLoader = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export const AllNft = () => {
  // const nftAll = useSelector((state) => state.nfts);
  const nft = useSelector((state) => state.nftquery);
  const hasMore = useSelector((state) => state.hasMore);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const instantCallback = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    instantCallback(getNftQuery(page))
  }, [instantCallback, page]);

  const token = localStorage.getItem("token")


  console.log(token)

  const fecthNft = () => {
    setTimeout(() => {
      if (hasMore) {
        setPage((prevState) => prevState + 1);
      }
    }, 1500);
  };
  
  return (
    <div style={{marginTop: "7.5rem"}}>

      <ContainerFiltrosMain>
        
          <CurrenciesFilter className={"filters"}/>

          <CategoryFilter className={"filters"}/>

          <SalesFilter className={"filters"}/>

          <FilesTypeFilter className={"filters"}/>
        
      </ContainerFiltrosMain>
      <ContainerAll>
        <InfiniteScroll
          dataLength={page * 10} //? 8
          next={fecthNft} //2
          hasMore={hasMore}
          style={{ overflow: "hidden" }}
          // loader={<h3 style={{color: 'var(--secondFontColor)', textAlign: 'center'}}>Loading...</h3>}
          loader={
            <ContainerLoader>
              <div
                style={{
                  width: "120px",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <Loading />
              </div>
            </ContainerLoader>
          }
          endMessage={
            <hr style={{borderColor: 'var(--mainBackGroundButtonColor)'}}/>
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
                likes={x.likes}
                token={token}
                id={x._id}
                key={x._id}
              />
            ))}
          </ContainerNft>
        </InfiniteScroll>
      </ContainerAll>
    </div>
  );
};
