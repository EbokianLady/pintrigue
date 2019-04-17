import React from 'react';
import { Link } from 'react-router-dom';

class Followers extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
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

  render() {
    const { user } = this.props;
    const numFollowers = user.follower_ids.length;
    const followerTense = (numFollowers === 1) ? 'follower' : 'followers';

    return (
      <>
        <div className="follow-profile-buffer">
          <div className="follow-profile">
            <div className='follow-count'>
              <div className='big-number'>
                {numFollowers}
              </div>
              <p>{followerTense}</p>
            </div>
            <div className="profile-image-container">
              {this.displayProfileImage()}
            </div>
          </div>
        </div>
        <div className="index-buffer">

        </div>
      </>
    )
  }
}

export default Followers;
