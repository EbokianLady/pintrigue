import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

export const receiveFollow = (payload) => {
  return {
    type: RECEIVE_FOLLOW,
    user: payload.user,
  };
};

export const removeFollow = (payload) => {
  return {
    type: REMOVE_FOLLOW,
    user: payload.user,
  };
};

export const receiveFollowErrors = (errors) => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

// thunk

export const createFollow = (follow) => dispatch => (
  FollowApiUtil.createFollow(follow).then(payload => (
    dispatch(receiveFollow(payload))
  ), err => (
    dispatch(receiveFollowErrors(err.responseJSON))
  ))
);

export const deleteFollow = (id, follow) => dispatch => (
  FollowApiUtil.deleteFollow(id, follow).then(payload => (
    dispatch(removeFollow(payload))
  ), err => (
    dispatch(receiveFollowErrors(err.responseJSON))
  ))
);
