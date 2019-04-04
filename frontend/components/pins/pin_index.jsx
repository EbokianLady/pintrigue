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
    console.log(this.state.pinsRendered);
  }

  componentDidMount() {
    if (this.props.type === 'Board') {
      this.props.fetchPins(this.props.boardId);
    } else if (this.props.type === 'User') {
      this.props.fetchPins(this.props.username);
    } else {
      this.props.fetchPins();
    }
  }

  render() {
    const pins = this.props.pins.map((pin, i) => {
      return <PinIndexItem pin={pin} key={i} onAddPin={this.addPin}/>
    });

    return (
        <div className="pin-index">
          {pins}
        </div>
    )
  }
}

export default PinIndex;
