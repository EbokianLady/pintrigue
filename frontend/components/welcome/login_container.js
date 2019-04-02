import { connect } from 'react-redux';
import React from 'react';

import { logout } from "../../actions/session_actions";
import { Link, withRouter } from 'react-router-dom';
import Welcome from './welcome';

const msp = (state, ownProps) => {
  return ({
    linkText: 'Sign Up'
  });
};

const mdp = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
  });
};

export default withRouter(connect(msp, mdp)(Welcome));