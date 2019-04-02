import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";
import { merge } from 'lodash';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    case RECEIVE_PIN:
      newState[action.pin.id] = action.pin;
      return newState;
    case REMOVE_PIN:
      delete newState[action.pinId];
      return newState;
    default:
      return state;
  }
};

export default pinsReducer;
