import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserEdit from './user_edit_form';

const msp = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  return ({
    username, user
  });
};

const mdp = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username))
});

export default connect(msp, mdp)(UserEdit);