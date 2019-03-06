import React, { Component, Fragment } from 'react';
import Strain from '../components/Strain'
import SearchBar from '../components/SearchBar'
import NewStrainForm from '../components/NewStrainForm'

class StrainContainer extends Component {

  state = {
    strains: [],
    filteredStrains: [],
    searchTerm: ""
  };

  componentDidMount(){
      fetch("http://localhost:3000/api/v1/strains")
      .then(res => res.json())
      .then(strains => this.setState({
        strains: strains,
        filteredStrains:strains}))
  }

  changeHandler = e => {
    console.log("change", e.target.value);
    let term = e.target.value.toLowerCase()
    let filtered = [...this.state.strains].filter(strain => strain.name.toLowerCase().includes(term)
  );
    this.setState({
      searchTerm: e.target.value,
      filteredStrains: filtered
    });
  };


  addStrain = (strainObj) => {
    fetch("http://localhost:3000/api/v1/strains", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(strainObj)
    })
    .then(res => res.json())
    .then(strain => {
      const newArray = [...this.state.strains, strain]
      const datNewArray = [...this.state.filteredStrains, strain]

      this.setState({
        strains: newArray,
        filteredStrains:datNewArray

      })
    })
  }
  render() {
    console.log("Strain container",this.state.strains);
    let strainList = this.state.filteredStrains.map(strain => (
      <Strain key={strain.id}
      strain={strain}
      clickHandler={this.props.clickHandler}
      />))

    return (
      <Fragment>
      <NewStrainForm
          addStrain={this.addStrain}
        />
        <hr/>
        <h2>Strains</h2>
        <SearchBar changeHandler={this.changeHandler} value={this.state.searchTerm}/>
        {strainList}
      </Fragment>
    );
  }

}

export default StrainContainer;
