import { Text, TouchableOpacity } from 'react-native'
import BasicContainer from '../components/container/basicContainer/BasicContainer'
import LoginRegister from '../components/templates/LoginRegister.tsx/LoginRegister'
import React from "react"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import DarkMode from '../components/molecules/darkMode/Index'
import { MyText } from '../components/atoms/MyText/Index'
import { createStackNavigator } from '@react-navigation/stack';
import { Link } from '@react-navigation/native'
const Stack = createStackNavigator()

const Test = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    const {user} = useSelector((state: RootState) => state)
    return (
    <BasicContainer  style={{backgroundColor: theme.colors.screenBack}}>
    <Link to={'/loginregister'} >Login</Link>
        <TouchableOpacity>

        </TouchableOpacity>
        <MyText>{user.email}</MyText>
        <MyText>{user.firstName}</MyText>
        <DarkMode/>
        </BasicContainer>
    )
}
const ProfilStack = ()=>{
    const {theme} = useSelector((state: RootState) => state)
    const {user} = useSelector((state: RootState) => state)
    return (
        <Stack.Navigator initialRouteName='profile' screenOptions={{headerShown:false}}>
            <Stack.Screen name='profile' component={Test}/>
            <Stack.Screen name='loginregister' component={LoginRegister} />

        </Stack.Navigator>

    )
}
export default ProfilStack