import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import UserProfileContainer from './user/user_profile_container';
import WelcomeContainer from './navbar/welcome_container';
import UserEditContainer from './user/user_edit_container';
import BoardShowContainer from './boards/board_show_continer';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomeContainer} />
        <Route path="/" component={NavbarContainer} />
      </Switch>
      <Switch>
        <Route exact path="/:username/edit" component={UserEditContainer}/>
        <Route path="/:username" component={UserProfileContainer} />
      </Switch>
      <Route exact path="/boards/:boardId" component={BoardShowContainer} />
      <Route exact path="/boards/:boardId/edit" component={BoardShowContainer} />
      {/* <Route path="/discovery" component={DiscoveryContainer} */}
    </div>
  )
};

export default App;
