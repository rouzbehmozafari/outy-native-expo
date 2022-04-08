import { Text, View } from "react-native"
import React from 'react'
import Styles from "./Styles" 
import { MyText } from "../../atoms/MyText/Index"
export const ViewAll:React.FC = ()=>{

    return (
            <View style={Styles.wrapper}>
                <MyText type="h3" >View all</MyText>
            </View>
    )
}