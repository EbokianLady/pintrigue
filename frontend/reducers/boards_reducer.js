import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from "../actions/board_actions";
import { merge } from 'lodash';
import { RECEIVE_PINS, RECEIVE_PIN } from "../actions/pin_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, newState, action.boards);
    case RECEIVE_USERS:
      return merge({}, newState, action.boards);
    case RECEIVE_USER:
      return merge({}, newState, action.boards);
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      newState[action.board.id] = action.board;
      return newState;
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState;
    case RECEIVE_PINS:
      return merge({}, newState, action.boards);
    case RECEIVE_PIN:
      return merge({}, newState, action.board);
    default:
      return state;
  }
};

export default boardsReducer;
