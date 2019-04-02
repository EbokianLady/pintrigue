import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
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
      return <PinIndexItem pin={pin} key={i} />
    });

    return (
      <div className="pin-index-box">
        <ul className="pin-index">
          {pins}
        </ul>
      </div>
    )
  }
}

export default PinIndex;
