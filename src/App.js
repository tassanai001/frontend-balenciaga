import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
});

class App extends Component {
  componentDidMount() {
    console.log('From App');
    client
      .query({
        query: gql`
          {
            User(name: "asdas", surname: "asdas") {
              name
              surname
            }
          }
        `,
      })
      .then(result => console.log('FUCK', result))
      .catch(error => console.log('Error:--> ', error));
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
