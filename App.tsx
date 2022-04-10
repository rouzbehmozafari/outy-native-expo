import 'react-native-gesture-handler';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import {  RootState, store } from './src/redux/store';
import AppNavContainer from './src/navigation/Index';
import {ApolloClient, InMemoryCache,ApolloProvider,HttpLink, from} from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import env from './src/config/env';

const errorLink = onError(({ graphqlErrors , networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ onmessage, location, path }) => {
        alert(`Graphql error ${onmessage}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://192.168.178.39:7777/graphql" }),
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <Provider store={store} >
          <AppNavContainer  />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
