import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import BoardIndexContainer from '../boards/board_index_container';
import PinUserIndexContainer from '../pins/pin_user_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // TO-DO add edited: false/true to change button colors
    this.state = { dropdown: false, showing: 'boards' };
    this.displayName = this.displayName.bind(this);
    this.displayDescription = this.displayDescription.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.showModal = this.showModal.bind(this);
    this.allowProfileNav = this.allowProfileNav.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hideDropdown);
  }

  allowProfileNav() {
    if (this.props.currentUser === this.props.user) {
      return (
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
      )
    } else {
      return (
        <nav className='profile-nav-guest'>
          {this.followBtn()}
        </nav>
      )
    }
  }

  followBtn() {
    const { user, currentUser } = this.props;

    if (currentUser.followed_user_ids.includes(user.id)) {
      return (
        <button
          className='follow-btn unfollow'
          onClick={this.handleUnfollow.bind(this)} >
          Unfollow
        </button>
      )
    } else {
      return (
        <button
          className='follow-btn follow'
          onClick={this.handleFollow.bind(this)} >
          Follow
        </button>
      )
    }
  }

  handleFollow() {
    const follow = {
      followed_id: this.props.user.id,
      followed_type: 'User',
    }
    this.props.createFollow(follow)
  }

  handleUnfollow() {
    const follow = {
      followed_id: this.props.user.id,
      followed_type: 'User',
    }
    this.props.deleteFollow(this.props.user.id, follow)
  }

  displayDescription() {
    const { user } = this.props;
    if (user.location && user.description) {
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
          <Link
            to={`/${this.props.username}/pin-builder`}
            className="dropdown-item">
            Create pin
          </Link>
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

  displayProfileImage() {
    const { user } = this.props;
    const letter = user.first_name ? user.first_name[0] : user.username[0];

    if (user.photoUrl) {
      return (
        <img className="profile-image" src={user.photoUrl}></img>
      )
    } else {
      return (
        <div className="profile-standin"><p>{letter.toUpperCase()}</p></div>
      )
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

  showPins(e) {
    this.setState({ showing: 'pins' })
  }

  showBoards(e) {
    this.setState({ showing: 'boards' })
  }

  render() {
    const { user } = this.props;

    if (user) {
      const numFollowers = user.follower_ids.length;
      const numFollowing = user.followed_board_ids.length + user.followed_user_ids.length;
      const followerTense = (numFollowers === 1) ? 'follower' : 'followers';

      let boardClassName = ' link-selected';
      let pinClassName = '';
      let component = <BoardIndexContainer
        user={this.props.user}
        boards={this.props.boards}
      />

      if (this.state.showing === 'pins') {
        boardClassName = '';
        pinClassName += ' link-selected';
        component = <PinUserIndexContainer
          user={this.props.user}
          boards={this.props.boards}
        />
      }

      return (
        <div>
          <div className="profile-buffer">
            <div className="profile-box">
              {this.allowProfileNav()}
              <div className='profile-content'>
                <div className="profile">
                  <section className="profile-body">
                    <h2 className="profile-name">
                      {this.displayName()}
                    </h2>
                    <div className="profile-follows">
                      <Link to={`/${user.username}/followers`}>
                        {numFollowers} {followerTense}
                      </Link>
                      <div className='bullet'>•</div>
                      <Link to={`/${user.username}/following`}>
                        {numFollowing} following
                      </Link>
                    </div>
                    <div className="profile-description">
                      {this.displayDescription()}
                    </div>
                  </section>
                  <nav className="profile-buttons">
                    <button
                      onClick={this.showBoards.bind(this)}
                      className={'oval-link' + boardClassName}>
                      Boards
                    </button>
                    <button
                      onClick={this.showPins.bind(this)}
                      className={'oval-link' + pinClassName}>
                      Pins
                    </button>
                  </nav>
                </div>
                <div className="profile-image-container">
                  {this.displayProfileImage()}
                </div>
              </div>
            </div>
          </div>
          <div className="index-buffer">
            {component}
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
