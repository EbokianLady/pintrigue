import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';


const App = () => {
    return (
        <div>
           <Route path="/" component={NavbarContainer} />
        </div>
    )
};

export default App;