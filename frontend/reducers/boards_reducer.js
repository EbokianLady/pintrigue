import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from "../actions/board_actions";
import { merge } from 'lodash';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_BOARDS:
    return action.boards;
    case RECEIVE_BOARD:
    newState[action.board.id] = action.board;
    return newState;
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;
