import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import { Waypoint } from 'react-waypoint';
import { timingSafeEqual } from 'crypto';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsRendered: 0,
      page: 1,
    };
    this.addPin = this.addPin.bind(this);
  }

  addPin() {
    const value = this.state.pinsRendered + 1;
    this.setState({ pinsRendered: value });
  }

  requestPins() {
    if (this.props.type === 'All') {
      this.props.fetchPins(this.state.page);
    } else if (this.props.type === 'Board') {
      this.props.fetchPins(this.props.boardId, this.state.page);
    } else if (this.props.type === 'User') {
      this.props.fetchPins(this.props.username, this.state.page);
    }
    this.setState({ page: this.state.page + 1 });
  }

  componentDidMount() {
    this.props.clearPinIndex();
    if (this.props.type === 'All') {
      this.props.fetchPins(this.state.page);
    } else if (this.props.type === 'Board') {
      this.props.fetchPins(this.props.boardId, this.state.page);
    } else if (this.props.type === 'User') {
      this.props.fetchPins(this.props.username, this.state.page);
    }
    this.setState({ page: this.state.page + 1 });
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
        <Waypoint
          onEnter={this.requestPins.bind(this)}
        />
      </div>
    )
  }
}

export default PinIndex;
