import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const boardId = ownProps.match.params.boardId;

  const board = state.entities.boards[boardId];
  const users = Object.values(state.entities.users);
  const allPins = Object.values(state.entities.pins);

  let creator;
  let pins;

  if (board) {
    creator = users.filter(user => user.id === board.creator_id)[0];
    pins = allPins.filter(pin => pin.board_id === board.id);
  }

  return ({
    currentUser, creator, boardId, board, pins
  });
};

const mdp = dispatch => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default connect(msp, mdp)(BoardShow);
