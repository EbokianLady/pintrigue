import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = state => ({
    link: "/signup",
    linkName: "Sign up",
    formName: "Log in",
    buttonName: "Continue"
});

const mdp = dispatch => ({
    action: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);