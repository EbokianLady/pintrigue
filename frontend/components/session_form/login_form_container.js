import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
    link: "/signup",
    linkName: "Sign up",
    formName: "Log in",
    buttonName: "Continue",
    errors: state.errors.session,
});

const mdp = dispatch => ({
    action: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal())} >
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);