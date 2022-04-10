import React, { useEffect, useState } from 'react'
import {  View } from 'react-native'
import { useSelector } from 'react-redux'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import { AddSumTempl } from '../components/templates/AddSumTempl/Index'
import { RootState } from '../redux/store'
import { LOAD_SUPPLIES } from '../api/queries/queries'
import { useQuery, gql } from "@apollo/client"

// let t = [{
//     categoryId : 2222,
//     title : 'sdsf',
//     imageUrl : 'sdfsdf',
//     price : 65
// }]
const HomeScreen = ()=>{
    const { error, loading, data } = useQuery(LOAD_SUPPLIES);
    const [supplies, setSupplies] = useState([]);
    useEffect(() => {
      if (data) {
        setSupplies(data.supplies);
      }
    }, [data]);
    console.log(Boolean(supplies))
    // let moneyTransactions = supplies.find(i => i.categoryId === 1001) 
// console.log(data.supplies[0])
    const {theme} = useSelector((state: RootState) => state)
    return (
        // {1loading && 
        
        // }
        
        <BasicContainer style={{backgroundColor: theme.colors.screenBack}}>
            <AddSumTempl 
            dataArray={supplies}
             header="Money Transactions" subCategory= {2615} / >
            <AddSumTempl dataArray={supplies}
             header="Transportations" subCategory={2615}  / >
            <AddSumTempl dataArray={supplies}
             header="Other (Jobs, Houses, Adds, ...)" subCategory={2615}  / >
        </BasicContainer>
    )
}
export default HomeScreen