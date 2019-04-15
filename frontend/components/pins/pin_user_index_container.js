import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchPins } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const user = ownProps.user;
  const username = user.username;
  const boards = ownProps.boards;
  const pins = ownProps.pins;

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
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
