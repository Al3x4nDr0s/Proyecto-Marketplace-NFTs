import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { ViewNft } from "./elements/ViewNft/ViewNft.jsx";
import { CollectionsCarousel } from "./elements/CollectionCarousel/CollectionsCarousel.jsx";
import Spinner from "../Spinner/Spinner.jsx";




const HomeTitle = styled.div`
  color: var(--secondFontColor);
`;

function Home() {
  // const [ isloading, setIsLoading ] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // })

  return (
    <>
    {
      // isloading === true ? <Spinner /> :
      <div>
        <CollectionsCarousel />
        <HomeTitle />
        <ViewNft />
      </div>
    }
    </>
  );
}

export default Home;
