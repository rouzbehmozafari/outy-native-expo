import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

type tFontSize = 'body' | 'h4' | 'h3' | 'h2' | 'h1' | undefined

interface Iprops {
    type? : tFontSize,
    style? : TextStyle,
    children : any
}   

export const MyText : React.FC<Iprops> = ({type,style,children})=> {
    const {theme} = useSelector((state: RootState) => state)

    const fontSizer = (parameter: tFontSize) => {
        switch (parameter) {
            case 'h4':
                return theme.fontVariants.fontSizeH4
                break;
            case 'h3':
                return theme.fontVariants.fontSizeH3
                break;
            case 'h2':
                return theme.fontVariants.fontSizeH2
                break;
            case 'h1':
                return theme.fontVariants.fontSizeH1
                break;
            default:
                return theme.fontVariants.fontSizeBody
                break;
        }
    }

    const Style = StyleSheet.create({
        wrapper :{
            fontSize : fontSizer(type),
            // margin : theme.spacing.sss,
            color: theme.colors.text.body,
            // padding: theme.spacing.sss,
            
        }
    }) 
    return (
        <Text style={[Style.wrapper,style]}>
            {children}
        </Text>
    )
}

