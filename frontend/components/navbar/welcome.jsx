import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import NavbarContainer from './navbar_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout().then(this.props.openModal);
  }

  render() {
    if (this.props.currentUser.id) {
      return <NavbarContainer />
    } else if (this.props.modal) {
      return <Modal />
    } else {
      return (
        <nav className="navbar signedout">
          <div className="nav-left">

          </div>
          <div className="nav-right">
            {this.props.openSignup}
            {this.props.openLogin}
          </div>
        </nav>
      )
    }
  }
}

export default Welcome;