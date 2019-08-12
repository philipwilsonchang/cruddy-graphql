import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client';
import { RestLink } from "apollo-link-rest";

import AddBookForm from './AddBookForm';
import ApolloTest from './ApolloTest';
import BooksTable from './BooksTable';
import Store from './Store';

const App = () => {
  const restLink = new RestLink({ uri: "https://swapi.co/api/" });
  const apolloClient = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
  })

  return (
    <Store>
      <div className="container">
        <h1>CRUD Library App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add Book</h2>
              <AddBookForm />
          </div>
          <div className="flex-large">
            <h2>View Books</h2>
              <BooksTable />
          </div>
          <div className="flex-large">
            <h2>Apollo Testing</h2>
              <ApolloProvider client={apolloClient}>
                <ApolloTest />
              </ApolloProvider>
          </div>
        </div>
      </div>
    </Store>
  )
}

export default App;