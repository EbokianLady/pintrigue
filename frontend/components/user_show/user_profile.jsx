import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import BoardIndexContainer from '../boards/board_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = this.displayName.bind(this);
    this.displayDescription = this.displayDescription.bind(this);
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

  render() {
    const { user } = this.props;

    if (user) {
      return (
        <div>
          <div className="user-profile-buffer">
            <div className="user-profile-box">
              <div className="user-profile">
                <nav className="profile-nav">

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
              <div className="profile-image-box">
                <div className="profile-image-container">
                  {/* <img src={user.photoUrl} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="user-index-buffer">
            <BoardIndexContainer />
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
