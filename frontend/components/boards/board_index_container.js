import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { clearPinIndex, fetchBoardPins } from '../../actions/pin_actions';
import BoardIndex from './board_index';
import { openModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const user = ownProps.user;
  const username = user.username;
  const boards = ownProps.boards;
  const pins = Object.values(state.entities.pins);
  return ({
    currentUser, username, user, boards, pins
  });
};

const mdp = dispatch => ({
  clearPinIndex: () => dispatch(clearPinIndex()),
  fetchBoardPins: (id, page) => dispatch(fetchBoardPins(id, page)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id, follow) => dispatch(deleteFollow(id, follow)),
});

export default withRouter(connect(msp, mdp)(BoardIndex));
