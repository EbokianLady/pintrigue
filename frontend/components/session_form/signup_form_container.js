import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
    link: "/login",
    linkName: "Log in",
    formName: "Sign up",
    buttonName: "Sign Up",
    errors: state.errors.session,
});

const mdp = dispatch => ({
    action: (user) => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal(user))} >
            Log In
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);