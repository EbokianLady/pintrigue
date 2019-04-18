import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { connect } from 'react-redux';
import BoardForm from './board_form';

const msp = (state, ownProps) => {
  const boardId = state.ui.currentObject;
  const board = state.entities.boards[boardId];
  const currentUser = state.entities.users[state.session.id];
  const users = Object.values(state.entities.users);
  let creator;

  if (users.length > 0 && board) {
    const user = users.filter(user => user.id === board.creator_id)[0];
    creator = user;
  }

  return ({
    board,
    buttonText: 'Save',
    creator,
    currentUser,
    formType: 'edit',
    header: 'Edit your board',
  });
};

const mdp = dispatch => ({
  action: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(BoardForm));
