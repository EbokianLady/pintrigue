import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import SplashContainer from '../splash/splash_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let component = <SignupFormContainer />;
    let route = '/login';
    if (this.props.linkText === 'Sign Up') {
      component = <LoginFormContainer />;
      route = '/';
    }

    return (
      <div>
        <div className="modal-transparency">
          <div className="modal-child">
            <div className="session-link-box">
              <Link 
                to={route}
                className="session-link">
                {this.props.linkText}
              </Link>
            </div>
            {component}
          </div>
        </div>
        <SplashContainer />
      </div>
    )
  }
}

export default Welcome;
