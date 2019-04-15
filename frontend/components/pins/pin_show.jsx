import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinBoardIndexContainer from '../pins/pin_board_index_container';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.showEditModal = this.showEditModal.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pinId);
  }

  displayEdit() {
      if (this.props.pin.creator.id === this.props.currentUser.id) {
        return (
          <button
          className='prof-buttons'
          onClick={this.showEditModal}>
            <i className='fas fa-pen p2-fas'></i>
          </button>
        )
      }
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

  showEditModal(e) {
    this.props.openModal('editPin', this.props.pin.id);
  }

  showCreateModal(e) {
    this.props.openModal('createPinJoin', this.props.pin.id);
  }

  render() {
    const { pin } = this.props;

    if (pin) {
      return (
        <div className='pin-buffer'>
          <div className='pin-panel'>
            <div className='pin-header'>
              <div>
                {this.displayEdit()}
              </div>
              <button
                className='save-btn'
                onClick={this.showCreateModal}>
                <i className='fas fa-map-pin'></i>
                <p>Save</p>
              </button>
            </div>
            <h3>{pin.title}</h3>
            <img className='pin-image' src={pin.pictureUrl} />
            {this.displayLink()}
            <h5>{pin.description}</h5>
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
