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
    }

 
    // props.fetchPins > the container will know which pin method to call

  }

  render() {
    // const pins = this.props.pins.map((pin, i) => {
    //   return <PinIndexItem pin={pin} key={i} />
    // });
      
    return (
      <div className="pin-index-box">All The Pins
        <ul className="pin-index">
          {/* {pins} */}
        </ul>
      </div>
    )
  }
}

export default PinIndex;