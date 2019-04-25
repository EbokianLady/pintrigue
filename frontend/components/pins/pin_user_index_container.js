import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { clearPinIndex, fetchUserPins } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const user = ownProps.user;
  const username = user.username;
  const boards = ownProps.boards;
  const pins = Object.values(state.entities.pins);

  return ({
    type: 'User',
    currentUser,
    user,
    username,
    boards,
    pins,
  });
};

const mdp = dispatch => ({
  clearPinIndex: () => dispatch(clearPinIndex()),
  fetchPins: (username, page) => dispatch(fetchUserPins(username, page)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
