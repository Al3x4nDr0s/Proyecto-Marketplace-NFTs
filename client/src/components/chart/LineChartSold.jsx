import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import getTransactions from "../../redux/actions/index.js"

const ChartContainer = styled.div`
    height: 100vh;
    width: 100vw;
`

export default function LineChartSold() {

    const dispatch = useDispatch()
    const transactions = useSelector(state=> state.transactions)

    useEffect(()=>{
        dispatch(getTransactions())
    },[])
  return (
    <ChartContainer>
        lineChartSold
        
    </ChartContainer>
  )
}
