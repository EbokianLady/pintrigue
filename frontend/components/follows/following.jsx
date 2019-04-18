import React from 'react';
import { Link } from 'react-router-dom';
import FollowUserIndexItem from './follow_user_index_item';
import FollowBoardIndexItem from './follow_board_index_item';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: 'people' };
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

  displayBoards() {
    const boardsFollowing = this.props.boardsFollowing.map((board, i) => {
      const pins = this.props.pins.filter(pin => pin.board_id === board.id)
      return <FollowBoardIndexItem
        currentUser={this.props.currentUser}
        board={board}
        pins={pins}
        key={i}
        createFollow={this.props.createFollow}
        deleteFollow={this.props.deleteFollow}
      />
    })
    return (
      <div className="index-buffer">
        < div className='board-index' >
          {boardsFollowing}
        </div >
      </div>
    )
  }

  displayPeople() {
    const usersFollowing = this.props.usersFollowing.map((follower, i) => {
      return <FollowUserIndexItem
        currentUser={this.props.currentUser}
        user={follower}
        key={i}
        createFollow={this.props.createFollow}
        deleteFollow={this.props.deleteFollow}
      />
    })
    return (
      <div className="user-index-buffer">
        < div className='follow-user-index' >
          {usersFollowing}
        </div >
      </div>
    )
  }

  showPeople(e) {
    this.setState({ showing: 'people' })
  }

  showBoards(e) {
    this.setState({ showing: 'boards' })
  }

  render() {
    const { user } = this.props;

    if (user) {
      const numFollowing = user.followed_board_ids.length + user.followed_user_ids.length;

      let peopleClassName = ' link-selected';
      let boardClassName = '';
      let component = this.displayPeople();

      if (this.state.showing === 'boards') {
        peopleClassName = '';
        boardClassName += ' link-selected';
        component = this.displayBoards();
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
          {component}
        </>
      )
    } else {
      return <div></div>
    }
  }
}

export default Following;
