import React, { Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'
class PortfolioContainer extends Component {

  render() {
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
          }
        </ul>
      </Fragment>
    );
  }

}

export default PortfolioContainer;
