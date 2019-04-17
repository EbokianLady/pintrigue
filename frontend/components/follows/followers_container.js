import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import Followers from './followers';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  let followers = [];

  if (user) {
    followers = Object.values(state.entities.users)
      .filter(userX => user.follower_ids.includes(userX.id));
  }

  const boards = Object.values(state.entities.boards);
  const pins = Object.values(state.entities.pins);

  return ({
    currentUser,
    user,
    followers,
    boards,
    pins,
  });
};

const mdp = (dispatch) => {
  return ({
    fetchUsers: () => dispatch(fetchUsers()),
  });
};

export default withRouter(connect(msp, mdp)(Followers));
