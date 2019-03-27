import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';

const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route path="/" component={NavbarContainer} />
            </Switch>
        </div>
    )
};

export default App;