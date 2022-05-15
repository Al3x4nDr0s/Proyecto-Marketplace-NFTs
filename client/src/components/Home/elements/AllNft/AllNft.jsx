import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../../../Loading/Loading.jsx";
import { getNftQuery, searchBarFilter } from "../../../../redux/actions/index";
import {IoIosSearch} from "react-icons/io";

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

const ContainerNft = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-left: 1rem;
`;

const ContainerFiltrosMain = styled.div`
  display: flex;
  justify-content: space-evenly;
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

  input{
    background-color: var(--secondFontColor);
    padding: 10px;
    border-radius: .3rem;
    outline: none;
    border: none;
    height: 25px;
    width: 80%;
  }
  button{
    background-color: transparent;
    border-radius: .3rem;
    outline: none;
    border: none;
    color: var(--secondFontColor);
  }
  .search-icon{
    position: relative;
    top: 4px;
    height: 20px;
    width: 20%;
    overflow: visible;
    color:var(--secondFontColor);
  }
  
  select{
    outline: 0;
    box-shadow: none;
    border: 0;
    background-color: rgba(71, 17, 137, 1);
    color: var(--secondFontColor);
    border-radius: 10px;
    padding: 10px;
    height: 70%;
    width: 15%;
  }

  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 400px;
    padding: 30px;
    
    select{
      width: 100%;
    }
    .searchbar-container{
      width: 100%;
      margin: 0;
      padding: 0;
    }

    input{
      width: 90%;
    }
    .search-icon{
      width: 10%;
    }
  }
  
  
`;

const ContainerLoader = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export const AllNft = () => {
  const nft = useSelector((state) => state.nftquery);
  const hasMore = useSelector((state) => state.hasMore);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")

  const instantCallback = useCallback(dispatch, [dispatch]); 

  function handleInputSearch(e){
    const value = e.target.value
    setSearch(value)
    if(value === "")fecthNft()
    else dispatch(searchBarFilter(search))
  }

  useEffect(() => {
    instantCallback(getNftQuery(page))
  }, [instantCallback, page]);

  const token = localStorage.getItem("token")

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
          
          <div className="searchbar-container">
            <input placeholder="Search..." value={search}  onChange={(e)=>handleInputSearch(e)} type="text" />
            <IoIosSearch className="search-icon"/>
            
          </div>

        
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
