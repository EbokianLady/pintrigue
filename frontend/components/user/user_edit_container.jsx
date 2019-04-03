import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UserEdit from './user_edit_form';

const msp = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  return ({
    username, user
  });
};

const mdp = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(msp, mdp)(UserEdit);