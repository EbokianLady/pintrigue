import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // props.fetchPins > the container will know which pin method to call
    // nevermind. fetchPins gets called with different arguments ...
    // this.props.fetchPins(this.props.username);
  }

  render() {
    // const pins = this.props.pins.map((pin, i) => {
      // return <PinIndexItem pin={pin} key={i} />
      // });
      
      // <ul className="pin-index">
      //   {pins}
      // </ul>
    return (
      <div className="pin-index-box">All User Pins
      </div>
    )
  }
}

export default PinIndex;