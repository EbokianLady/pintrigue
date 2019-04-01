import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { removeBoard, fetchBoards, fetchBoard } from './actions/board_actions';
import { fetchAllPins, fetchUserPins, fetchBoardPins } from './actions/pin_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = { ui: { modal: "login" }};

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.username]: window.currentUser }
      },
      session: { id: window.currentUser.username },
    };
    delete window.currentUser;
  }

  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.removeBoard = removeBoard;
  window.fetchBoard = fetchBoard;
  window.fetchBoards = fetchBoards;

  window.fetchAllPins = fetchAllPins;
  window.fetchUserPins = fetchUserPins;
  window.fetchBoardPins = fetchBoardPins;
  // testing

  ReactDOM.render(<Root store={store} />, root);
});