import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
  username: ownProps.match.params.username,
  formType: 'create',
  header: 'Create board',
  buttonText: 'Create',
  board: { name: '', description: '' }
});

const mdp = dispatch => ({
  action: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(BoardForm));
