import React from 'react'

const Strain = props => {
  let{strain,clickHandler} = props;
return(
  <div>

    <div className="card" onClick= {() =>clickHandler(strain) }>
      <div className="card-body">
        <h5 className="card-title">{
            strain.name
          }</h5>
        <p className="card-text">{
          <img alt="" src={strain.img_1}/>
          }</p>
          <strong>{strain.description}</strong>
         <button className="btn btn-primary">Put In Cart</button>
      </div>
    </div>


  </div>
);
};

export default Strain
