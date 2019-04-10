import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchPins } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  const pins = Object.values(state.entities.pins)
    .filter(pin => pin.creator.id === user.id);

  return ({
    currentUser,
    type: 'User',
    pins,
    username,
    user,
  });
};

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
