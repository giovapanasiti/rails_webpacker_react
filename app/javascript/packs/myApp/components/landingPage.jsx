import React from 'react';
// Components
import Pricing from './landingPage/pricing';
import Pitch from './landingPage/pitch';
import {Api} from '../middleware/api';

class LandingPage extends React.Component {
  render() {
	Api.helloWorld();
    return(
      <div>
        <Pitch {...this.props} />
        <Pricing {...this.props}/>
      </div>
    )
  }
}
export default LandingPage