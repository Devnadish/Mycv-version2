import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/i18n';
import './style/index.css'
import './style/fonts.css'
import { ApolloClient, InMemoryCache, HttpLink, from,ApolloProvider } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import {ProfileProvider } from "./helper/context"

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Messagexxx: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});


const httpLink = new HttpLink({
  uri: 'http://localhost:1337/graphql',
});
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

    <>
     <ProfileProvider>
    <ApolloProvider client={client}>

        <App />
    </ApolloProvider>
    </ProfileProvider>
    </>
    
      
   

  // </React.StrictMode>
);
