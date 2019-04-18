import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FollowBoardIndexItem extends React.Component {
  displayCover() {
    const { pins } = this.props;
    if (pins.length > 2) {
      return (
        <div className="board-display" >
          <img className="b3-pic1" src={pins[0].pictureUrl} />
          <img className="b3-pic2" src={pins[1].pictureUrl} />
          <img className="b3-pic3" src={pins[2].pictureUrl} />
        </div>
      )
    } else if (pins.length > 0) {
      return (
        <img src={pins[0].pictureUrl} />
      )
    }
  }

  handleFollow() {
    const follow = {
      followed_id: this.props.board.id,
      followed_type: 'Board',
    }
    this.props.createFollow(follow)
  }

  handleUnfollow() {
    const follow = {
      followed_id: this.props.board.id,
      followed_type: 'Board',
    }
    this.props.deleteFollow(this.props.board.id, follow)
  }

  toBoardShow(e) {
    if (!e.target.className.includes('follow-btn')) {
      this.props.history.push(`/boards/${this.props.board.id}`);
    }
  }

  followBtn() {
    const { board, currentUser } = this.props;

    if (currentUser.followed_board_ids.includes(board.id)) {
      return (
        <button
          className='follow-btn unfollow'
          onClick={this.handleUnfollow.bind(this)}>
          Unfollow
        </button>
      )
    } else {
      return (
        <button
          className='follow-btn follow'
          onClick={this.handleFollow.bind(this)}>
          Follow
        </button>
      )
    }
  }

  render() {
    const { board } = this.props;
    const pinCount = board.pin_join_ids.length;
    const pinTense = (pinCount === 1) ? 'Pin' : 'Pins';

    return (
      <div className='b-index-frame' >
        <div
          onClick={this.toBoardShow.bind(this)} >
          <div className='b-cover'>
            {this.displayCover()}
          </div>
          <div className='b-footer-guest'>
            <div className='f-board-stats'>
              <h5>{board.name}</h5>
              <p>{pinCount} {pinTense}</p>
            </div>
            <div className='follow-btn-container'>
              {this.followBtn()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FollowBoardIndexItem);
