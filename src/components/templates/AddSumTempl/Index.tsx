
import React from 'react'
import { ScrollView, TouchableOpacity, View, ViewStyle } from "react-native"
import { AllMoneyTrans } from "../../../constants/adds/moneyTrans"
import { MyText } from "../../atoms/MyText/Index"
import { ViewAll } from "../../molecules/ViewAll/Index"
import { AddOverView } from "../../organisms/AddOverview/Index"
import uuid from 'react-native-uuid';
import styles from "./styles"

interface Iprops {
    header : string,
    subCategory : number,
    dataArray : any[],
    Styles? : ViewStyle
}
export const AddSumTempl:React.FC<Iprops> = ({header,subCategory,dataArray,Styles})=>{

    return (
        <View style={[styles.wrapper,Styles]}>
            <TouchableOpacity style={styles.header} >
                <MyText type='h3' >{header}</MyText>
                <MyText type='h3' style={styles.viewAll}>View All</MyText>
            </TouchableOpacity>
            <ScrollView style={styles.list} horizontal>
                {dataArray.map(i => 
                    <AddOverView
                    subCategory= {i.categoryId}
                    title={i.title} imageUrl={i.imageUrl}
                    key = {uuid.v4()}
                    price={i.price} />
                )}
                <ViewAll/>
            </ScrollView>
        </View>

    )
}