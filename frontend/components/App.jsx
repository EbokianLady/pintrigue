import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import UserProfileContainer from './user/user_profile_container';
import LoginContainer from './welcome/login_container';
import UserEditContainer from './user/user_edit_container';
import BoardShowContainer from './boards/board_show_container';
import DiscoveryContainer from './pins/pin_discovery_container';
import SignupContainer from './welcome/signup_container';
import Modal from './modal/modal';
import CreatePinFormContainer from './pins/create_pin_form_container';
import Test from './test_page/text';
import PinShowContainer from './pins/pin_show_container';
import SplashContainer from './splash/splash_container';

const App = () => {
  return (
    <>
      <Modal />
      <Switch>
        <Route exact path="/" component={SignupContainer}/>
        <Route exact path="/login" component={LoginContainer}/>
        <Route path="/" component={NavbarContainer} />
      </Switch>
      <Switch>
        <Route exact path='/' component={SplashContainer} />
        <Route exact path='/login' component={SplashContainer} />
        <Route path="/discovery" component={DiscoveryContainer} />
        <Route path='/pins/:pinId' component={PinShowContainer} />
        <Route exact path="/boards/:boardId" component={BoardShowContainer} />
        <Route exact path="/boards/:boardId/edit" component={BoardShowContainer} />
        <Route exact path="/:username/edit" component={UserEditContainer}/>
        <Route exact path="/:username/pin-builder" component={CreatePinFormContainer} />
        <Route exact path="/:username" component={UserProfileContainer} />
      </Switch>
      <footer className='footer'>
        <nav className='footer-nav'>
          <a className='footer-links'
            target='_blank'
            href='https://ebokianlady.github.io/'>
            <i className="far fa-circle"></i>
          </a>
          <a className='footer-links'
            target='_blank'
            href='https://github.com/EbokianLady'>
            <i className="fab fa-github"></i>
          </a>
          <a className='footer-links'
            target='_blank'
            href='https://www.linkedin.com/in/stephanie-keller-8157aa171/'>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </nav>
      </footer>
    </>
  )
};

export default App;
