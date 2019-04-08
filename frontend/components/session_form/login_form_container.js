import { connect } from 'react-redux';
import SessionForm from './session_form';
import {
  login, clearSessionErrors,clearSessionPasswordErrors, clearSessionEmailErrors
} from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

const formatErrors = (error) => {
  return ({
    usernameError: error.username || [],
    passwordError: error.password || [],
    emailError: error.email || [],
  });
};

const msp = state => ({
  formName: "Log in",
  errors: formatErrors(state.errors.sessionErrors),
});

const mdp = dispatch => ({
  action: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user)),

  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearSessionErrors()),
  clearSessionEmailErrors: () => dispatch(clearSessionEmailErrors()),
  clearSessionPasswordErrors: () => dispatch(clearSessionPasswordErrors()),
});

export default withRouter(connect(msp, mdp)(SessionForm));
