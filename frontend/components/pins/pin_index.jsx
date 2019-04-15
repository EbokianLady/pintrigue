import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pinsRendered: 0 };
    this.addPin = this.addPin.bind(this);
  }

  addPin() {
    const value = this.state.pinsRendered + 1;
    this.setState({ pinsRendered: value });
  }

  componentDidMount() {
    if (this.props.type === 'All') {
      this.props.fetchPins();
    }
  }

  render() {
    const pins = this.props.pins.map((pin, i) => {
      return <PinIndexItem
        pin={pin}
        key={i}
        onAddPin={this.addPin}
        openModal={this.props.openModal}
        currentUser={this.props.currentUser} />
    });

    return (
      <div className="pin-index">
        {pins}
      </div>
    )
  }
}

export default PinIndex;
