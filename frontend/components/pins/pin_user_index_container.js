import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchUserPins } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';


const msp = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  const pins = Object.values(state.entities.pins);

  return ({
    username, user
  });
};

const mdp = dispatch => ({
  fetchPins: (username) => dispatch(fetchBoards(username))
});

export default withRouter(connect(msp, mdp)(PinIndex));