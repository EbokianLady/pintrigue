import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import BoardIndexItem from './board_index_item';
import FollowBoardIndexItem from '../follows/follow_board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boards = this.props.boards.map((board, i) => {
      const pins = this.props.pins.filter(pin => pin.board_id === board.id);
      if (this.props.user === this.props.currentUser) {
        return (
          <BoardIndexItem
            username={this.props.username}
            board={board}
            pins={pins}
            key={i}
            openModal={this.props.openModal}
            authorized={true}
          />
        )
      } else {
        return (
          <FollowBoardIndexItem
            currentUser={this.props.currentUser}
            board={board}
            pins={pins}
            key={i}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow}
          />
        )
      }
    });

    return (
      <div className='board-index'>
        {boards}
      </div>
    )
  }
}

export default BoardIndex;
