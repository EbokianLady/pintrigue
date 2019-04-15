import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

export const receiveBoards = (payload) => {
  return {
    type: RECEIVE_BOARDS,
    users: payload.users,
    boards: payload.boards,
    pins: payload.pins,
  };
};

export const receiveBoard = (payload) => {
  return {
    type: RECEIVE_BOARD,
    user: payload.user,
    board: payload.board,
    pins: payload.pins,
  };
};

export const removeBoard = (boardId) => {
  return {
    type: REMOVE_BOARD,
    boardId,
  };
};

export const receiveBoardErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

// thunk

export const fetchBoards = () => dispatch => (
  BoardApiUtil.fetchBoards().then(boards => (
    dispatch(receiveBoards(boards))
  ), err => (
    dispatch(receiveBoardErrors(err.responseJSON))
  ))
);

export const fetchBoard = id => dispatch => (
  BoardApiUtil.fetchBoard(id).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveBoardErrors(err.responseJSON))
  ))
);

export const createBoard = (board) => dispatch => (
  BoardApiUtil.createBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveBoardErrors(err.responseJSON))
  ))
);

export const updateBoard = board => dispatch => (
  BoardApiUtil.updateBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), err => (
    dispatch(receiveBoardErrors(err.responseJSON))
  ))
);

export const deleteBoard = id => dispatch => (
  BoardApiUtil.deleteBoard(id).then(board => (
    dispatch(removeBoard(board.id))
  ), err => (
    dispatch(receiveBoardErrors(err.responseJSON))
  ))
);
