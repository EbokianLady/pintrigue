import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPinJoin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import CreatePinJoinForm from './create_pinjoin_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const username = state.session.id;
  const currentUser = state.entities.users[username];
  const pinId = state.ui.currentObject;
  const pin = state.entities.pins[pinId];
  const boards = Object.values(state.entities.boards)
    .filter(board => board.creator_id === currentUser.id);

  return ({
    username, currentUser, pin, boards
  });
};

const mdp = dispatch => ({
  createPinJoin: (pin, boardId) => dispatch(createPinJoin(pin, boardId)),
  fetchBoards: (username) => dispatch(fetchBoards(username)),
  closeModal: (modal) => dispatch(closeModal(modal)),
});

export default withRouter(connect(msp, mdp)(CreatePinJoinForm));
