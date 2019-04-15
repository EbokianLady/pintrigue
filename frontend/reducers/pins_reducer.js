import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";
import { merge } from 'lodash';
import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, newState, action.pins);
    case RECEIVE_USERS:
      return merge({}, newState, action.pins);
    case RECEIVE_USER:
      return merge({}, newState, action.pins);
    case RECEIVE_BOARDS:
      return merge({}, newState, action.pins);
    case RECEIVE_BOARD:
      return merge({}, newState, action.pins);
    case RECEIVE_PINS:
      return action.pins;
    case RECEIVE_PIN:
      return merge({}, newState, { [action.pin.id]: action.pin });
    case REMOVE_PIN:
      delete newState[action.pinId];
      return newState;
    default:
      return state;
  }
};

export default pinsReducer;
