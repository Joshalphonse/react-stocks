import React, { Component, Fragment } from 'react';

const SearchBar = (props) => {
  return (
    <Fragment>
      <strong>Search for Stocks!</strong>
      <br/>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortBy === "Alphabetically"} onChange={props.handleRadio}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortBy === "Price"} onChange={props.handleRadio}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleSelect} value={props.selectSort}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </Fragment>
  );
}


export default SearchBar;
