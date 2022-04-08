import React, { ReactNode, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { Style } from './Style'

interface props {
    inpVal? : string,
    setInpValue?: any,
    style? : any,
    label? : string,
    error? : string,
    val? : string,
    iconPosition?: string,
    placeholder?:string,
    onChangeText?:any,
    secureTextEntry?:boolean,
    icon? : any
}


const MyInput: React.FC<props> = ({inpVal,setInpValue,style,label,error})=> {
    const [isFocused,setIsFocused] = useState<boolean>(false)

    return (
        <View>
            {label && <Text>{label}</Text>}
            <TextInput style={[Style,style]}
                // placeholder={inpVal}
                onBlur={()=> setIsFocused(true)}
                onFocus={()=> setIsFocused(false)}
                onChangeText={setInpValue}
                value={inpVal}
             />
            {error && <Text>{error}</Text>}
        </View>
    )
}

export default MyInput