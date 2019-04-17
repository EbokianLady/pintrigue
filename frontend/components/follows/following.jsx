import React from 'react';
import { Link } from 'react-router-dom';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: 'boards' };

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

  showPeople(e) {
    this.setState({ showing: 'people' })
  }

  showBoards(e) {
    this.setState({ showing: 'boards' })
  }

  render() {
    const { user } = this.props;
    const numFollowing = user.followed_board_ids.length + user.followed_user_ids.length;

    let peopleClassName = ' link-selected';
    let boardClassName = '';
    // let component = <FollowPeopleIndexContainer
    //   user={this.props.user}
    //   boards={this.props.boards}
    //   pins={this.props.pins}
    // />

    if (this.state.showing === 'boards') {
      peopleClassName = '';
      boardClassName += ' link-selected';
      // component = <PinUserIndexContainer
      //   user={this.props.user}
      //   boards={this.props.boards}
      //   pins={this.props.pins}
      // />
    }

    return (
      <>
        <div className="follow-profile-buffer">
          <div className="follow-profile">
            <div className='follow-count'>
              <div className='big-number'>
                {numFollowing}
              </div>
              <p>following</p>
            </div>
            <div className="profile-image-container">
              {this.displayProfileImage()}
            </div>
          </div>
        </div>
        <div className='follow-toggle-nav'>
          <nav className="follow-buttons">
            <button
              onClick={this.showPeople.bind(this)}
              className={'oval-link' + peopleClassName}>
              People
            </button>
            <button
              onClick={this.showBoards.bind(this)}
              className={'oval-link' + boardClassName}>
              Boards
            </button>
          </nav>
        </div>
        <div className="index-buffer">

        </div>
      </>
    )
  }
}

export default Following;
