import React, { Fragment } from 'react'

const Stock = () => (
  <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
          }</p>
        <button className="btn btn-primary">Buy Stock</button>
      </div>
    </div>


  </Fragment>
);

export default Stock
