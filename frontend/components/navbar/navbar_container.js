import { connect } from 'react-redux';
import React from 'react';

import { logout } from "../../actions/session_actions";
import { Link, withRouter } from 'react-router-dom';
import Navbar from './navbar';

const msp = (state) => {
  const { session, entities, ui } = state;
  return ({
    currentUser: entities.users[session.id] || {},
  });
};

const mdp = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
  });
};

export default withRouter(connect(msp, mdp)(Navbar));