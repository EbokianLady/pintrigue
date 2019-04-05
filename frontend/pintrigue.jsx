import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { removeBoard, fetchBoards, fetchBoard } from './actions/board_actions';
import { fetchAllPins, fetchUserPins, fetchBoardPins, createPin } from './actions/pin_actions';
import { fetchUsers } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = { };

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
  // testing

  ReactDOM.render(<Root store={store} />, root);
});
