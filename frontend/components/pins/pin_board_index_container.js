import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchBoardPins, clearPinIndex } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const creator = ownProps.creator;
  const board = ownProps.board;
  const boardId = board.id;
  const pins = Object.values(state.entities.pins);

  return ({
    type: 'Board',
    currentUser,
    creator,
    board,
    boardId,
    pins,
  });
};

const mdp = dispatch => ({
  clearPinIndex: () => dispatch(clearPinIndex()),
  fetchPins: (id, page) => dispatch(fetchBoardPins(id, page)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
