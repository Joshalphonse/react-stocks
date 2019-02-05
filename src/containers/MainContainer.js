import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      stocks: [],
      boughtStocks: [],
      filterTerm: "",
      sortBy: "",
      selectSort: "All"
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  addStock = (stock) => {
    const stocksArr = [... this.state.boughtStocks, stock]
    this.setState({boughtStocks: stocksArr})
    // this.setState((prevState) => {
    //   return {boughtStocks: [...prevState.boughtStocks, stock]}
    // })
  }

  handleRadio= (event) => {
    this.setState({sortBy: event.target.value})
  }

  handleSelect = (event) =>{
    this.setState({selectSort: event.target.value})
  }

  chooseStocks = () => {
    let tempStocks = [...this.state.stocks]
    //filtering first by name and/or ticker

    if(this.state.selectSort === "All"){
      tempStocks = [...this.state.stocks]
    } else {
      tempStocks = tempStocks.filter(stock => stock.type === this.state.selectSort)
    }
    //sort
    if(this.state.sortBy === "Alphabetically"){
      return tempStocks.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
    }else if(this.state.sortBy === "Price"){
      return tempStocks.sort((stockA, stockB) => stockA.price - stockB.price)
    } else{
      return tempStocks
    }
  }

  render() {
    return (
      <Fragment>
        <SearchBar
          handleInput={this.handleInput}
          filterTerm={this.state.filterTerm}
          handleRadio={this.handleRadio}
          sortBy={this.state.sortBy}
          handleSelect={this.handleSelect}
          selectSort={this.state.selectSort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.chooseStocks()} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks}/>

            </div>
          </div>
      </Fragment>
    );
  }

}

export default MainContainer;
