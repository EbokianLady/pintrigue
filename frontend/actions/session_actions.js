import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    };
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//thunk actions

export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => {
    return (
        SessionApiUtil.logout().then(user => (
            dispatch(logoutCurrentUser())
        )));
};