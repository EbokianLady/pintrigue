import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import CreatePinForm from './create_pin_form';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const username = ownProps.match.params.username;
  const boards = Object.values(state.entities.boards)
    .filter(board => board.creator_id === currentUser.id);

  return ({
    currentUser, username, boards
  });
};

const mdp = dispatch => ({
  createPin: (pin, boardId) => dispatch(createPin(pin, boardId)),
  fetchBoards: () => dispatch(fetchBoards())
});

export default withRouter(connect(msp, mdp)(CreatePinForm));
