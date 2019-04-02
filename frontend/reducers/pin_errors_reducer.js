import { RECEIVE_PIN_ERRORS } from "../actions/pin_actions";

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors.error_message || [];
    // case CLEAR_BOARD_ERRORS:
    //   return [];
    default:
      return state;
  }
};

export default pinErrorsReducer;
