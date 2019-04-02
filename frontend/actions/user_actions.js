import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

// thunk 

export const fetchUser = username => dispatch => (
  UserApiUtil.fetchUser(username).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.receiveUserErrors))
  ))
);