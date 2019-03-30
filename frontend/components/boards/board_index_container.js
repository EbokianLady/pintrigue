import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';

const msp = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  const boards = Object.values(state.entities.boards);

  return ({
    username, user, boards
  });
};

const mdp = dispatch => ({
  fetchBoards: (username) => dispatch(fetchBoards(username))
});

export default withRouter(connect(msp, mdp)(BoardIndex));