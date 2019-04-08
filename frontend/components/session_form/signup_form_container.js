import { connect } from 'react-redux';
import SessionForm from './session_form';
import {
  signup, login, clearSessionErrors, clearSessionUsernameErrors,
  clearSessionPasswordErrors, clearSessionEmailErrors
} from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

const formatErrors = (error) => {
  const emailError = error.email ? [error.email[0]] : null;

  return ({
    usernameError: error.username || [],
    passwordError: error.password || [],
    emailError: emailError || [],
  });
};

const msp = state => ({
  formName: "Sign up",
  errors: formatErrors(state.errors.sessionErrors),
});

const mdp = dispatch => ({
  action: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),

  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearSessionErrors()),
  clearSessionEmailErrors: () => dispatch(clearSessionEmailErrors()),
  clearSessionUsernameErrors: () => dispatch(clearSessionUsernameErrors()),
  clearSessionPasswordErrors: () => dispatch(clearSessionPasswordErrors()),
});

export default withRouter(connect(msp, mdp)(SessionForm));
