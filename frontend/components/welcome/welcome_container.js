import { connect } from 'react-redux';

import { logout } from "../../actions/session_actions";
import Welcome from './welcome';

const msp = (state) => {
    const { session, entities } = state;
    return ({
        currentUser: entities.users[session.id] || {}
    });
};

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Welcome);