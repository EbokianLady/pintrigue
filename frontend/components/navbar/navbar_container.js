import { connect } from 'react-redux';

import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const msp = (state) => {
    const { session, entities } = state;
    return ({
        currentUser: entities.users[session.id] || {}
    });
};

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal()),
});

export default connect(msp, mdp)(Navbar);