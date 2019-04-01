import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';

const msp = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  // const pins = Object.values(state.entities.pins);

  return ({
    username, user
  });
};

const mdp = dispatch => ({
  // fetchBoards: (username) => dispatch(fetchBoards(username))
});

export default withRouter(connect(msp, mdp)(PinIndex));