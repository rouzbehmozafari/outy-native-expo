import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import myAxios from '../helpers/axiosInterceptors';

const AppNavContainer = ()=>{


    return (
      <NavigationContainer >
        <TabNavigator/>
      </NavigationContainer>
    )
}

export default AppNavContainer