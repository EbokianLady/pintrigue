import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import BoardIndexContainer from '../boards/board_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = this.displayName.bind(this);
    this.displayDescription = this.displayDescription.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username);
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

  toggleDropdown(e) {
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown.hidden) {
      dropdown.hidden = false;
      dropdown.className = "profile-visible";
    } else {
      dropdown.hidden = true;
      dropdown.className = "profile-hidden";
    }
  }

  render() {
    const { user } = this.props;

    if (user) {
      return (
        <div>
          <div className="user-profile-buffer">
            <div className="user-profile-box">
              <div className="user-profile">
                <nav className="profile-nav">
                  <button className="prof-buttons prof-plus"
                    onClick={this.toggleDropdown}>
                    <i className="fas fa-plus p2-fas"></i>
                    <div id="profile-dropdown" className="profile-hidden" hidden={true}>
                      <button className="profile-dropdown-item">
                        <p>
                          Create board
                        </p>
                      </button>
                      <button className="profile-dropdown-item">
                        <p>
                          Create pin
                        </p>
                      </button>
                    </div>
                  </button>
                  <button className="prof-buttons">
                    <i className="fas fa-pen p2-fas"></i>
                  </button>
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
                  <button>Boards</button>
                  <button>Pins</button>
                </nav>
              </div>
                <div className="profile-image-container">
                  <img className="profile-image" src={user.photoUrl}></img>
                </div>
            </div>
          </div>
          <div className="user-index-buffer">
            <Switch>
              <Route path="/:username/boards" component={BoardIndexContainer} />
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
