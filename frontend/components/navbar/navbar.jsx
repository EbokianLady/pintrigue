import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        this.props.logout().then(this.props.openModal);
    }

    render() {
        if (this.props.currentUser.id) {
            return (
                <nav className="navbar signedin">
                    <div className="nav-left">
                        <h3>Welcome, {this.props.currentUser.username}</h3>
                    </div>
                    <div className="nav-right">
                        <button onClick={this.handleLogout} >Logout</button>
                    </div>
                </nav>
            )
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

export default Navbar;