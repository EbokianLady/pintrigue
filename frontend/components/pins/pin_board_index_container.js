import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchBoardPins } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const boardId = ownProps.match.params.boardId;
  const board = state.entities.boards[boardId];
  const pins = Object.values(state.entities.pins);

  return ({
    board,
    boardId,
    currentUser,
    pins,
    type: 'Board',
  });
};

const mdp = dispatch => ({
  fetchPins: (boardId) => dispatch(fetchBoardPins(boardId)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
