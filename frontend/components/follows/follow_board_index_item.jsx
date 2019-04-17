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

  toUserShow(e) {
    if (e.target.className.includes('p-link')) {
      this.props.history.push(`/pins/${this.props.pin.id}`);
    }
  }

  followBtn() {
    const { board, currentUser } = this.props;

    if (currentUser.followed_board_ids.includes(board.id)) {
      return <button className='follow-btn unfollow'>Unfollow</button>
    } else {
      return <button className='follow-btn follow'>Follow</button>
    }
  }

  render() {
    const { board } = this.props;
    const pinCount = board.pin_join_ids.length;
    const pinTense = (pinCount === 1) ? 'pin' : 'pins';

    return (
      <div className='follow-board-frame' >
        <Link className='f-board-profile'
          to={`/boards/${board.id}`}>
          <div className='f-board-cover'>
            {this.displayCover()}
          </div>
          <div className='f-board-footer'>
            <div className='f-board-stats'>
              <h5>{board.name}</h5>
              <p>{pinCount} {pinTense}</p>
            </div>
            <div className='follow-btn-container'>
              {this.followBtn()}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(FollowBoardIndexItem);
