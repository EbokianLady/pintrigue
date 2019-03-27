import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    handleLogout(e) {
        this.props.logout();
        this.props.history.push("/login");
    }

    render() {
        if (this.props.currentUser.id) {
            return (
                <div>
                    <h3>Welcome, {this.props.currentUser.username}</h3>
                    <button onClick={this.handlelogout} >Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup" >Sign Up</Link>
                    <Link to="/login" >Log In</Link>
                </div>
            )
        }
    }
}

export default Navbar;