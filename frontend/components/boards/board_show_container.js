import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';
import { createFollow, deleteFollow } from '../../actions/follow_actions';


const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const boardId = ownProps.match.params.boardId;

  const board = state.entities.boards[boardId];
  const users = Object.values(state.entities.users);
  const pins = Object.values(state.entities.pins);

  let creator;

  if (board) {
    creator = users.filter(user => user.id === board.creator_id)[0];
  }

  return ({
    currentUser, creator, boardId, board, pins
  });
};

const mdp = dispatch => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id, follow) => dispatch(deleteFollow(id, follow)),
});

export default connect(msp, mdp)(BoardShow);
