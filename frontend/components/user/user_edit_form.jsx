import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentDidMount() {

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const user = this.state;
    return (
      <div className="user-edit-container">
        <div className="user-edit-box">
          <div className="user-edit-header">
            <div className="user-edit-text">
              <h2>Edit Profile</h2>
              <p>People on Pintrigue will get to know you with the info below</p>
            </div>
            <div className="user-edit-links">
              <Link 
                className="rectangle-btn"
                to={`/${this.props.username}`}>
                Cancel
              </Link>
              <button
                className="rectangle-btn"
                onClick={() => {}}>
                Done
              </button>
            </div>
          </div>

          <div className="user-edit-photo">
            <h4>Photo</h4>
            <div>
              <div className="edit-image">image</div>
              <button className="rectangle-btn">Change</button>
            </div>
          </div>

          <div className="user-name">
            <div>
              <h4>First name</h4>
              <TextInput 
                className="input edit-name"
                name={user.first_name}
                value={user.first_name}
                onChange={this.update('first_name')}
              />
            </div>
            <div>
              <h4>Last name</h4>
              <TextInput
                className="input edit-name"
                name={user.last_name}
                value={user.last_name}
                onChange={this.update('last_name')}
              />
            </div>
          </div>

          <div className="user-username">
            <h4>Username</h4>
            <div>
              <p>www.pintrigue.herokuapp.com/</p>
              <TextInput
                className="input edit-username"
                name={user.username}
                value={user.username}
                onChange={this.update('username')}
              />
            </div>
          </div>

          <div className="user-about">
            <h4>About your profile</h4>
            <TextInput
              className="input edit-about"
              name={user.description}
              value={user.description}
              onChange={this.update('description')}
            />
          </div>

          <div className="location">
            <h4>Location</h4>
            <TextInput
              className="input edit-location"
              name={user.location}
              value={user.location}
              onChange={this.update('location')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default UserEdit;
