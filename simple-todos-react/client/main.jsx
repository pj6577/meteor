import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import { startGraphQLClient } from 'meteor/quave:graphql/client';


const apolloClient = startGraphQLClient({ 
  connectToDevTools: true,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
// const apolloClient = new ApolloClient({ 
//   connectToDevTools: true,
//   uri: 'http://localhost:4000/',
//   cache: new InMemoryCache(),
// });

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>,
    document.getElementById('react-target')
  );
});