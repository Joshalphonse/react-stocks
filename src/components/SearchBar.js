import React, { Component, Fragment } from 'react';

const SearchBar = ({changeHandler, value}) => {
  return (
    <Fragment>
      <strong>Search for Strains!</strong>
      <br/>

      <label>
        <input type="text"
        placeholder="Search Strains!"
        value={value}
        onChange={changeHandler}/>

      </label>

    </Fragment>
  );
}


export default SearchBar;
