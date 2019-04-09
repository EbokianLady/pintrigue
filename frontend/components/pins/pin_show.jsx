import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinBoardIndexContainer from '../pins/pin_board_index_container';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pinId)
      .then(this.props.fetchBoard(this.props.boardId));
  }

  displayLink() {
    const { pin } = this.props;

    if (pin.link_url !== '') {
      return (
        <div className='pin-link-box'>
          <a href={pin.link_url} target='_blank' className='pin-link'>
            <i className="fas fa-external-link-alt"></i>
            <p>Check it out</p>
          </a>
        </div>
      )
    }
  }

  displayUsername() {
    const { pin } = this.props;

    if (this.props.currentUser.username === pin.creator.username) {
      return 'You'
    } else {
      return pin.creator.username
    }
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
            {this.displayLink()}
            <div className='pin-footer'>
              <Link
                to={`/${pin.creator.username}`}>
                {this.displayUsername()}
              </Link>
              <p>saved to ...</p>
              <p></p>
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
