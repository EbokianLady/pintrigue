import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import BoardIndexContainer from '../boards/board_index_container';
import PinUserIndexContainer from '../pins/pin_user_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
    this.displayName = this.displayName.bind(this);
    this.displayDescription = this.displayDescription.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hideDropdown);
  }
  
  displayDescription() {
    const { user } = this.props;
    if (user.location || user.description) {
      return [user.location, user.description].join(" • ");
    } else if (user.location) {
      return user.location;
    } else if (user.description) {
      return user.description;
    } else {
      return null;
    }
  }

  displayDropDown() {
    if (this.state.dropdown) {
      return (
        <div ref={node => this.node = node} className="profile-visible">
          <button 
            className="dropdown-item"
            onClick={this.showModal}
            >
            Create board
          </button>
          <button className="dropdown-item">
            Create pin
          </button>
        </div>
      )
    }
  }
  
  displayName() {
    const { user } = this.props;
    if (user.first_name || user.last_name ) {
      return [user.first_name, user.last_name].join(" ");
    } else if (user.first_name) {
      return user.first_name;
    } else if (user.last_name) {
      return user.last_name;
    } else {
      return user.username;
    }
  }
  
  hideDropdown(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ dropdown: false });
      document.removeEventListener('mousedown', this.hideDropdown);
    }
  }
  
  showDropdown(e) {
    this.setState({ dropdown: true });
    document.addEventListener('mousedown', this.hideDropdown);
  }
  
  showModal(e) {
    this.props.openModal('createBoard');
  }
  
  render() {
    const { user } = this.props;
    const path = this.props.history.location.pathname;
    let pinClassName = '';
    let boardClassName = '';
    if (path.match(/pins/)) {
      pinClassName += ' link-selected';
    } else {
      boardClassName += ' link-selected';
    }

    if (user) {
      return (
        <div>
          <div className="profile-buffer">
            <div className="profile-box">
              <div className="profile">
                <nav className="profile-nav">
                  <div className="prof-buttons prof-plus"
                    onClick={this.showDropdown}>
                    <i className="fas fa-plus p2-fas"></i>
                    {this.displayDropDown()}
                  </div>
                  <Link 
                    to={`/${this.props.username}/edit`}
                    className="prof-buttons" >
                    <i className="fas fa-pen p2-fas"></i>
                  </Link>
                </nav>
                <section className="profile-body">
                  <h2 className="profile-name">
                    {this.displayName()}
                  </h2>
                  <div className="profile-follows"></div>
                  <div className="profile-description">
                    {this.displayDescription()}
                  </div>
                </section>
                <nav className="profile-buttons">
                  <Link 
                    to={`/${this.props.username}/boards`}
                    className={'oval-link' + boardClassName}>
                    Boards
                  </Link>
                  <Link 
                    to={`/${this.props.username}/pins`}
                    className={'oval-link' + pinClassName}>
                    Pins
                  </Link>
                </nav>
              </div>
                <div className="profile-image-container">
                  <img className="profile-image" src={user.photoUrl}></img>
                </div>
            </div>
          </div>
          <div className="index-buffer">
            <Switch>
              <Route path="/:username/boards" component={BoardIndexContainer} />
              <Route path="/:username/pins" component={PinUserIndexContainer} />
              <Route path="/:username" component={BoardIndexContainer} />
            </Switch>
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

export default UserProfile;
