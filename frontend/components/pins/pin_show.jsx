import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinBoardIndexContainer from '../pins/pin_board_index_container';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pinId);
  }

  render() {
    const { pin } = this.props;

    if (pin) {
      return (
        <div className='pin-buffer'>
          <div className='pin-panel'>
            <div className='pin-header'>
              <button
                className='prof-buttons'>
                <i className='fas fa-pen p2-fas'></i>
              </button>
              <button
                className='save-btn'>
                <i className='fas fa-map-pin'></i>
                <p>Save</p>
              </button>
            </div>
            <h3>{pin.title}</h3>
            <img className='pin-image' src={pin.pictureUrl} />
            <div className='pin-footer'>

            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default PinShow;
