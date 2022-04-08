import React from 'react'
import { ImageProps, ImageSourcePropType, ImageURISource, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Image } from 'react-native'
import { MyText } from '../../atoms/MyText/Index'
import style from './style'
// import { v4 as uuidv4 } from 'uuid';

type tFontSize = 'body' | 'h4' | 'h3' | 'h2' | 'h1' | undefined

interface Iprops {
    title: string,
    styleProp? : ViewStyle,
    imageUrl :  string,
    price : number | 'Negotiable',
    subCategory : number
}   

export const AddOverView : React.FC<Iprops> = ({subCategory,title,styleProp,imageUrl,price})=> {

    
    return (
        <TouchableOpacity style={[style.wrapper,styleProp]} 
        
        >
            <Image
                style={style.image}
                
                source ={{
                uri: imageUrl
                }}
            />            
            <MyText style={style.title} type='h3'>{title}</MyText>
            <MyText type='body' style={style.price}>{price}{price!== 'Negotiable' && '€'}</MyText>
        </TouchableOpacity>
    )
}

