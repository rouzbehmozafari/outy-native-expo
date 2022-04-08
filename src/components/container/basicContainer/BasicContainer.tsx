import React from "react"
import { ScrollView, View, ViewStyle } from "react-native"
import Styles from "./Styles"

type props = {children : any , style?: any}
const BasicContainer: React.FC<props> = ({children,style})=>{
    return(
        <ScrollView style={[Styles.wrapper,style]} >
            <View>
                {children}
            </View>
        </ScrollView>
    )
}

export default BasicContainer