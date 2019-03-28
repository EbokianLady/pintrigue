import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';

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
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // testing

    ReactDOM.render(<Root store={store} />, root);
});