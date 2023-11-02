import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";



function App() {

  const client = new ApolloClient({
    uri: '/graphql', // Replace with your GraphQL API endpoint
    cache: new InMemoryCache(),
  });

  loadErrorMessages();


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className="text-center mb-3">Characters</h1>
        <div className="container">
          <div className="row">
            Filter component will be placed here
            <div className="col-lg-8 col-12">
              <div className="row">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
