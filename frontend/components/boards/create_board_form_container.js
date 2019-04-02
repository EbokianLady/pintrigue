import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { createBoard } from '../../actions/board_actions';
import CreateBoardForm from './create_board_form';
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
  username: ownProps.match.params.username
});

const mdp = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(CreateBoardForm));
