import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserPins(this.props.username);
    this.props.fetchBoards(this.props.username);
  }

  render() {
    const boards = this.props.boards.map((board, i) => {
      const pins = this.props.pins.filter(pin => pin.board_id === board.id);
      return <BoardIndexItem pins={pins} board={board} key={i} />
    });

    return (
      <div className='board-index-box'>
        <ul className='board-index'>
          {boards}
        </ul>
      </div>
    )
  }
}

export default BoardIndex;