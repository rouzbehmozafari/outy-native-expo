import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { useDispatch} from 'react-redux'
import { setDark, setLight } from '../../../redux/slices/themeSlice'
import { MyText } from '../../atoms/MyText/Index'
import styles from './styles'
const DarkMode = ()=>{
    const [value,setValue] = useState<boolean>(false)
    const dispatch = useDispatch()

    const toggleSwitch = () => {
        setValue(!value)
        value ?  dispatch(setLight()) : dispatch(setDark()) 
    }
    
    return (
        <View style={styles.container} >
            <MyText type='body'>Sun or Moon</MyText>
            <Switch value={value} onValueChange={toggleSwitch} />
        </View>
    )
}
export default DarkMode