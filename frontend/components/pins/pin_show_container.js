import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import PinShow from './pin_show';
import { fetchBoard } from '../../actions/board_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const pinId = ownProps.match.params.pinId;
  const pin = state.entities.pins[pinId];
  let boardId;
  let board;

  // this isn't quite working ...
  if (pin) {
    boardId = pin.board_id;
    board = state.entities.boards[boardId];
  }

  return ({
    pin, pinId, currentUser, boardId, board
  });
};

const mdp = dispatch => ({
  fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  fetchUsers: () => dispatch(fetchUsers()),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default connect(msp, mdp)(PinShow);
