import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FollowUserIndexItem extends React.Component {
  displayProfileImage() {
    const { user } = this.props;
    const letter = user.first_name ? user.first_name[0] : user.username[0];

    if (user.photoUrl) {
      return (
        <img className="profile-image" src={user.photoUrl}></img>
      )
    } else {
      return (
        <div className="f-profile-standin"><p>{letter.toUpperCase()}</p></div>
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

  toUserShow(e) {
    if (e.target.className.includes('p-link')) {
      this.props.history.push(`/pins/${this.props.pin.id}`);
    }
  }

  followBtn() {
    const { user, currentUser } = this.props;

    if (currentUser && (user.id === currentUser.id)) {
      return <button className='follow-btn follow-you'>This is you</button>
    } else if (currentUser && (currentUser.followed_user_ids.includes(user.id))) {
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

  render() {
    const { user } = this.props;
    const boardCount = user.board_ids.length;
    const boardTense = (boardCount === 1) ? 'board' : 'boards';

    const followerCount = user.follower_ids.length;
    const followerTense = (followerCount === 1) ? 'follower' : 'followers';

    return (
      <div className='follow-user-frame' >
        <Link className='f-user-profile'
          to={`/${user.username}`}>
          {this.displayProfileImage()}
          <div className='f-user-stats'>
            <h5>{user.username}</h5>
            <p>{boardCount} {boardTense} • {followerCount} {followerTense}</p>
          </div>
        </Link>
        <div className='follow-btn-container'>
          {this.followBtn()}
        </div>
      </div>
    )
  }
}

export default withRouter(FollowUserIndexItem);
