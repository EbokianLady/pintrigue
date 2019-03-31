import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import UserProfileContainer from './user_show/user_profile_container';
import WelcomeContainer from './navbar/welcome_container';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomeContainer} />
        <Route path="/" component={NavbarContainer} />
      </Switch>
      <Route path="/:username" component={UserProfileContainer} />
      {/* <Route path="/discovery" component={DiscoveryContainer} */}
    </div>
  )
};

export default App;
