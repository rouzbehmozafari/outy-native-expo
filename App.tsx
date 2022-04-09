import 'react-native-gesture-handler';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import {  RootState, store } from './src/redux/store';
import AppNavContainer from './src/navigation/Index';

const App: React.FC = () => {



  return (

      <Provider store={store} >
          <AppNavContainer  />
      </Provider>

  );
};

export default App;
