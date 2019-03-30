import { connect } from 'react-redux';
import React from 'react';

import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link, withRouter } from 'react-router-dom';
import Welcome from './welcome';

const msp = (state) => {
  const { session, entities, ui } = state;
  return ({
    currentUser: entities.users[session.id] || {},
    modal: ui.modal,
  });
};

const mdp = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    openSignup: (
      <button 
        className="nav-links nav-signup"
        onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
    openLogin: (
      <button 
        className="nav-links nav-login"
        onClick={() => dispatch(openModal('login'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('login')),
  })
};

export default withRouter(connect(msp, mdp)(Welcome));