import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const client = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
});

 

import React from 'react';
import PropTypes from 'prop-types';

import classes from './ErrorMessage.module.css';


const ErrorMessage = (props) => {
    const { error, ...rest } = props;

    const shouldDisplayError = error && error.message ?
        <div className={classes.errorMessage} {...rest}>{error.message}</div>
        :
        null
    ;

    return shouldDisplayError;
};

ErrorMessage.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired
    })
};

export default ErrorMessage; 