import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from "../../actions/session_actions";
import Navbar from './navbar';
import { fetchUsers, fetchUser } from '../../actions/user_actions';


const msp = (state) => {
  const { session, entities, ui } = state;
  return ({
    currentUser: entities.users[session.id] || {},
  });
};

const mdp = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchUser: (username) => dispatch(fetchUser(username)),
  });
};

export default withRouter(connect(msp, mdp)(Navbar));
