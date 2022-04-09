import React, { useEffect } from 'react'
import {  View } from 'react-native'
import { useSelector } from 'react-redux'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import { AddSumTempl } from '../components/templates/AddSumTempl/Index'
import { RootState } from '../redux/store'
import { AllMoneyTrans } from '../constants/adds/moneyTrans'
import myAxios from '../helpers/axiosInterceptors'



const HomeScreen = ()=>{
    useEffect(()=>{

        
      },[])

    const {theme} = useSelector((state: RootState) => state)
    return (
        <BasicContainer style={{backgroundColor: theme.colors.screenBack}}>
            <AddSumTempl dataArray={AllMoneyTrans}
             header="Money Transactions" subCategory= {2615} / >
            <AddSumTempl dataArray={AllMoneyTrans}
             header="Transportations" subCategory={2615}  / >
            <AddSumTempl dataArray={AllMoneyTrans}
             header="Other (Jobs, Houses, Adds, ...)" subCategory={2615}  / >
        </BasicContainer>
    )
}
export default HomeScreen