import React, { Component } from 'react';
import StrainContainer from './StrainContainer'
import ItemContainer from './ItemContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state ={
    item: []
  }

  strainclickHandler = (strainObj) => {
    console.log("click Handler", strainObj);
    this.setState({
      item:[...this.state.item, strainObj]
    });

  };


  itemClickHandler = strainObj => {
    console.log("port Handler",strainObj);
    let newItem = [...this.state.item].filter(
      strain => strain.id !== strainObj.id
    );
    this.setState({
      item:newItem
    });
  };

  render() {
    console.log("Main state", this.state.item);
    return (
      <div>


          <div className="row">
            <div className="col-8">

              <StrainContainer clickHandler={this.strainclickHandler}/>

            </div>
            <div className="col-4">

              <ItemContainer strains={this.state.item} clickHandler={this.itemClickHandler}/>
              <hr/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
