import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const msp = state => ({
    formName: "Log in",
    errors: state.errors.session,
});

const mdp = dispatch => ({
    action: (user) => dispatch(login(user)),
    otherForm: (
        <button 
            className="session-link"
            onClick={() => dispatch(openModal('signup'))} >
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);