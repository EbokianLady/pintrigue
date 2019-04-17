import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import Following from './following';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  const pins = Object.values(state.entities.pins);
  let usersFollowing;
  let boardsFollowing;

  if (user) {
    usersFollowing = Object.values(state.entities.users)
      .filter(userX => user.followed_user_ids.includes(userX.id));
    boardsFollowing = Object.values(state.entities.boards)
      .filter(board => user.followed_board_ids.includes(board.id));
  }

  return ({
    currentUser,
    user,
    usersFollowing,
    boardsFollowing,
    pins,
  });
};

const mdp = (dispatch) => {
  return ({
    fetchUsers: () => dispatch(fetchUsers()),
  });
};

export default withRouter(connect(msp, mdp)(Following));
