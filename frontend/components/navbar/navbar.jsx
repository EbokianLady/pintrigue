import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
    this.handleLogout = this.handleLogout.bind(this);
    this.toProfile = this.toProfile.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  handleLogout(e) {
    this.props.logout().then(this.props.history.push("/"));
  }

  displayDropdown() {
    if (this.state.dropdown) {
      return (
        <div ref={node => this.node = node} className="nav-visible">
          <button className="dropdown-item"
            onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      )
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hideDropdown);
  }

  hideDropdown(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ dropdown: false });
      document.removeEventListener('mousedown', this.hideDropdown);
    }
  }

  showDropdown(e) {
    this.setState({ dropdown: true });
    document.addEventListener('mousedown', this.hideDropdown);
  }


  toProfile(e) {
    const { currentUser } = this.props;
    this.props.history.push(`/${currentUser.username}`);
  }

  // TO-DO write a clear current user function/reducer for logout
  // TO-DO fix login/logout buttons for unsignedin user
  // TO-DO change queries selectors to state changes
  render() {
    if (this.props.currentUser.username) {
      return (
          <div>
            <nav className="navbar signedin">
              <div className="nav-left">
                <div className="profile-links">
                  <Link to="/" >
                    <img src={window.logo} className="nav-logo" />
                  </Link>
                </div>
                <h2>Welcome, {this.props.currentUser.username}</h2>
              </div>
              <div className="nav-right">
                <button className="profile-links"
                  onClick={this.toProfile}>
                    <i className="fas fa-user-circle p-fas"></i>
                </button>
                <button
                  className="profile-links"
                  onClick={this.showDropdown} >
                  <i className="fas fa-ellipsis-h p-fas"></i>
                </button>
              </div>
            </nav>
            {this.displayDropdown()}
          </div>
        )
    } else {
      return (
        <nav className="navbar signedout">
          <div className="nav-left">
            <div className="profile-links">
              <Link to="/" >
                <img src={window.logo} className="nav-logo" />
              </Link>
            </div>
            <h2>Welcome to Pintrigue</h2>
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
