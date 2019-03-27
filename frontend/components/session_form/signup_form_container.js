import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

const msp = state => ({
    formName: "Sign up",
    errors: state.errors.session,
});

const mdp = dispatch => ({
    action: (user) => dispatch(signup(user)),
    otherForm: (
        <button 
            className="session-link"
            onClick={() => dispatch(openModal('login'))} >
            Log In
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(msp, mdp)(SessionForm));