import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import UserProfileContainer from './user_show/user_profile_container';

const App = () => {
    return (
        <div>
           <Route path="/" component={NavbarContainer} />
           <Route path="/:username" component={UserProfileContainer} />
        </div>
    )
};

export default App;