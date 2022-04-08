import React, { useEffect, useState } from 'react'
import {  View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
const AddScreen = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    return (
        <View>
        </View>
    )
}
export default AddScreen