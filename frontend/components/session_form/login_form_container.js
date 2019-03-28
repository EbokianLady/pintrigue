import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

const msp = state => ({
    formName: "Log in",
    errors: state.errors.sessionErrors,
});

const mdp = dispatch => ({
    action: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    otherForm: (
        <button 
            className="session-link"
            onClick={() => dispatch(openModal('signup'))} >
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(msp, mdp)(SessionForm));