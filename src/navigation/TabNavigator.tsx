import React from 'react'
import AddScreen from '../screens/AddScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileStack from '../screens/ProfileStack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import HomeSvg from '../assets/images/svg/HomeSvg';
import AddSvg from '../assets/images/svg/AddSvg';
import ProfileSvg from '../assets/images/svg/ProfileSvg';
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () =>{
    const {theme} = useSelector((state: RootState) => state) 
    
        return (
            <Tab.Navigator initialRouteName="Home"
            barStyle={{ backgroundColor: theme.colors.nav.back }}
            
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Add',
                        tabBarIcon: () => (
                        //   <Icon name="window-maximize" color={'white'} size={26} />
                            <AddSvg/>
                        ),
                      }}
                name='Add' component={AddScreen}  />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            // <FontAwesomeIcon icon={faCoffee} />
                            <HomeSvg/>

                        ),
                        }}
                 name='Home' component={HomeScreen} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: () => (
                            <ProfileSvg/>
                        ),
                        }}
                name='profilestack' component={ProfileStack} />
            </Tab.Navigator>
    )
}


export default TabNavigator