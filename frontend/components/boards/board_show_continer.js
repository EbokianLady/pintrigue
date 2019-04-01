import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const msp = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId;
  const board = state.entities.boards[boardId];
  return ({
    board, boardId
  });
};

const mdp = dispatch => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
});

export default connect(msp, mdp)(BoardShow);
