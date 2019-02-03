import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  handleRadio(){

  }

  handleSelect(){

  }

  render() {
    return (
      <Fragment>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </Fragment>
    );
  }

}

export default MainContainer;
