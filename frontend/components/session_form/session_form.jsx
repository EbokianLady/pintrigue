import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: "juneberry@fakemail.com", password: "vault66" };
    this.props.login(demoUser).then(() => this.props.history.push("/discovery"));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(() => this.props.history.push("/discovery"));
  }

  update(field) {
    let clearErrors = () => {}; // dummy function

    if (field === 'username' && this.props.errors.usernameError.length > 0) {
      clearErrors = this.props.clearSessionUsernameErrors;
    }
    if (field === 'password' && this.props.errors.passwordError.length > 0) {
      clearErrors = this.props.clearSessionPasswordErrors;
    }
    if (field === 'email' && this.props.errors.emailError.length > 0) {
      clearErrors = this.props.clearSessionEmailErrors;
    }

    return (e) => {
      this.setState({ [field]: e.target.value });
      clearErrors();
    };
  }

  render() {
    return (
      <div className="modal-page">
        <div className="session-form-box">
          <div className="small-logo-box">
            <img src={window.logo} className="small-logo"/>
          </div>
          <h2>Welcome to Pintrigue</h2>
          <p>Find new ideas to try</p>
          <form onSubmit={this.handleSubmit} className="session-form">
            {
              this.props.formName === "Sign up" ?
                <TextInput
                  className='input'
                  name='Username'
                  value={this.state.username}
                  onChange={this.update('username')}
                  errors={this.props.errors.usernameError}
                /> :
                null
            }
            <TextInput
              className='input'
              type='email'
              name='Email'
              value={this.state.email}
              onChange={this.update('email')}
              errors={this.props.errors.emailError}
            />
            <TextInput
              type='password'
              className='input'
              name='Password'
              value={this.state.password}
              onChange={this.update('password')}
              errors={this.props.errors.passwordError}
            />
          </form>
          <button className="sesh-submit" onClick={this.handleSubmit}>{this.props.formName}</button>
          <button className="sesh-submit" onClick={this.handleDemo}>Demo</button>
        </div>
      </div>
    )
  }
}

export default SessionForm;
