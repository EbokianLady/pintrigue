import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CLEAR_SESSION_USERNAME_ERRORS = "CLEAR_SESSION_USERNAME_ERRORS";
export const CLEAR_SESSION_EMAIL_ERRORS = "CLEAR_SESSION_EMAIL_ERRORS";
export const CLEAR_SESSION_PASSWORD_ERRORS = "CLEAR_SESSION_PASSWORD_ERRORS";

export const receiveCurrentUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: payload.user,
    boards: payload.boards,
    pins: payload.pins,
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const clearSessionUsernameErrors = () => ({
  type: CLEAR_SESSION_USERNAME_ERRORS,
});

export const clearSessionPasswordErrors = () => ({
  type: CLEAR_SESSION_PASSWORD_ERRORS,
});

export const clearSessionEmailErrors = () => ({
  type: CLEAR_SESSION_EMAIL_ERRORS,
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
    ))
  );
};
