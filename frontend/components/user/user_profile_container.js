import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  const boards = Object.values(state.entities.boards)
    .filter(board => board.creator_id === user.id);
  const pins = Object.values(state.entities.pins)
    .filter(pin => pin.creator.id === user.id);
  return ({
    currentUser: state.entities.users[state.session.id] || {},
    username,
    user,
    boards,
    pins,
  });
};

const mdp = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(UserProfile);
