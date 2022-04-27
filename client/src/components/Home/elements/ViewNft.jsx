import React from 'react'

import styled from "styled-components";


const titleNft = styled.h1`
  color: var(--colorInfo);
`


export const ViewNft = () => {
  return (
    <div>
        <titleNft>Hello</titleNft>
        <h1 style={{color: "var(--secondFontColor)"}}>View NFT</h1>
    </div>
  )
}
