import { connect } from 'react-redux';
import React from 'react';

import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const msp = (state) => {
    const { session, entities } = state;
    return ({
        currentUser: entities.users[session.id] || {}
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
        openModal: () => dispatch(openModal()),
    })
};

export default connect(msp, mdp)(Navbar);