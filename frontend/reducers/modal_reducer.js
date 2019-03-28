import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const modalReducer = (state = null, action) => {
    Object.freeze(state);

    switch(action.type) {
        case OPEN_MODAL: 
            return action.modal || state;
        case CLOSE_MODAL:
            return null;
        case LOGOUT_CURRENT_USER:
            return "login";
        default:
            return state;
    }
};

export default modalReducer;