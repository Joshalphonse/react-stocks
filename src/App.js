import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <MainContainer/>
      </Fragment>
    );
  }
}

export default App;
