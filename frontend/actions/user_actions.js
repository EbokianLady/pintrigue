import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUsers = (payload) => {
  return {
    type: RECEIVE_USERS,
    users: payload.users,
    boards: payload.boards,
    pins: payload.pins,
  };
};

export const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    boards: payload.boards,
    pins: payload.pins,
  };
};

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

// thunk

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const fetchUser = username => dispatch => (
  UserApiUtil.fetchUser(username).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const updateUser = (formData, id) => dispatch => (
  UserApiUtil.updateUser(formData, id).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.receiveUserErrors))
  ))
);
