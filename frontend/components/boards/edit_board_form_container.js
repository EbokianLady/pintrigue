import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { connect } from 'react-redux';
import BoardForm from './board_form';

const msp = (state, ownProps) => {
  const boardId = state.ui.currentObject;
  const board = state.entities.boards[boardId];

  return ({
    username: ownProps.match.params.username,
    formType: 'edit',
    header: 'Edit your board',
    buttonText: 'Save',
    board
  });
};

const mdp = dispatch => ({
  action: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(BoardForm));
