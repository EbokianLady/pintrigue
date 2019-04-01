import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchUserPins(this.props.username);
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