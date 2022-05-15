import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTransactions } from '../../redux/actions'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"
import {Line} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)


const ChartContainer = styled.div`
    height: 100vh;
    width: 100vw;
`

export default function LineChartSold() {

    const months = {
        0:"enero",
        1:"febrero",
        2:"marzo",
        3:"abril",
        4:"mayo",
        5:"junio",
        6:"julio",
        7:"agosto",
        8:"septiembre",
        9:"octubre",
        10:"noviembre",
        11:"diciembre"
    }


    const dispatch = useDispatch()
    const transactions = useSelector(state=> state.transactions)
    
    useEffect(()=>{
        dispatch(getTransactions())
    },[])
    
    
    console.log(transactions)
    const uniqueMonths = [...new Set(transactions?.map(t => new Date(t.create_date).getMonth()))]
    const uniqueMonthsConvertedToMonthName = uniqueMonths.map( m=> months[m])

    const quantityPerSaleMarch = []
    const quantityPerSaleApril = []
    const quantityPerSaleMay = []



    const calculateQuantity = transactions.forEach(t =>{
        if((new Date(t.create_date).getMonth()) === 2){
            quantityPerSaleMarch.push(t.amount)
        } 
        if((new Date(t.create_date).getMonth()) === 3){
            quantityPerSaleApril.push(t.amount)
        } 
        if((new Date(t.create_date).getMonth()) === 4){
            quantityPerSaleMay.push(t.amount)
        } 
    })
    
    const quantitySoldMarch = quantityPerSaleMarch.reduce(function(a, b) { return a + b})
    const quantitySoldApril = quantityPerSaleApril.reduce(function(a, b) { return a + b})
    const quantitySoldMay = quantityPerSaleMay.reduce(function(a, b) { return a + b})
    
    const totalsPerMonth = [quantitySoldMarch,quantitySoldApril,quantitySoldMay]
    console.log(totalsPerMonth)
    console.log(uniqueMonthsConvertedToMonthName)
    
    // function convertToMonths(){
        
    // }

    // const uniqueMonths
    
    const options = {
        responsive : true
    }
     
    const data = useMemo ( function (){ 

        return{
            
            datasets: [
                {
                    label: "Sales per Month",
                    data: totalsPerMonth
                }
            ],
            labels: uniqueMonthsConvertedToMonthName,
        }; 
    },[])

    

  return (
    <Line data={data} options={options} />
  )
}
