import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

const msp = state => ({
    formName: "Sign up",
    errors: state.errors.sessionErrors,
});

const mdp = dispatch => ({
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    otherForm: (
        <button 
            className="session-link"
            onClick={() => dispatch(openModal('login'))} >
            Log In
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(msp, mdp)(SessionForm));