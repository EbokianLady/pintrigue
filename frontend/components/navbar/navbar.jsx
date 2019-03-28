import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toProfile = this.toProfile.bind(this);
    }

    handleLogout(e) {
        this.props.logout().then(this.props.history.push("/"));
    }

    toggleDropdown(e) {
        const dropdown = document.getElementById('nav-dropdown');
        if (dropdown.hidden) {
            dropdown.hidden = false;
            dropdown.className = "nav-visible";
        } else {
            dropdown.hidden = true;
            dropdown.className = "nav-hidden";
        }
    }

    toProfile(e) {
        const { currentUser } = this.props;
        this.props.history.push(`/${currentUser.username}`);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <nav className="navbar signedin">
                        <div className="nav-left">
                            <div className="profile-links small-logo"></div>
                            <h2>Welcome, {this.props.currentUser.username}</h2>
                        </div>
                        <div className="nav-right">
                            <button className="profile-links prof-btn" 
                                onClick={this.toProfile}>
                                    <i className="fas fa-user-circle"></i>
                                </button>
                            <button
                                className="profile-links"
                                onClick={this.toggleDropdown} >
                                    <i className="fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </nav>
                    <div id="nav-dropdown" className="nav-hidden" hidden={true}>
                        <ul>
                            <li>
                                <button className="nav-dropdown-item"
                                    onClick={this.handleLogout}>
                                    <p>
                                        Logout
                                    </p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )
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