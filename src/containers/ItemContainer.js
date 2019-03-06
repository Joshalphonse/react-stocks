import React, { Component } from 'react';
import Strain from '../components/Strain'
import SearchBar from '../components/SearchBar'

class ItemContainer extends Component {

  render() {
    let strains = this.props.strains.map(strainObj => (
      <Strain key={strainObj.id}
      strain={strainObj}
      clickHandler={this.props.clickHandler}
      />))
    return (
      <div>
        <h2>My Items</h2>
        
          {
            strains
          }
      </div>
    );
  }

}

export default ItemContainer;
