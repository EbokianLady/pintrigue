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
    this.props.login(demoUser).then(this.props.closeModal);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

  update(field) {
    let clearErrors;
    if (field === 'username') clearErrors = this.props.clearSessionUsernameErrors;
    if (field === 'password') clearErrors = this.props.clearSessionPasswordErrors;
    if (field === 'email') clearErrors = this.props.clearSessionEmailErrors;

    return (e) => {
      this.setState({ [field]: e.target.value });
      clearErrors();
    };
  }

  // dummy action that makes state 'change' triggers

  // react events onSubmit onChange onSelect onFocus onUnfocus
  // react component library (form) - infinite scroll
  // bootstrap material view
  // medium

  render() {
    return (
      <div className="session-page">
        <div className="session-link-box">
          {this.props.otherForm}
        </div>
        <div className="session-form-box">
          <div className="small-logo-box">
            <img src={window.logo} className="small-logo"/>
          </div>
          <h2>{this.props.formName} to see more</h2>
          <p>Access Pintrigue's best ideas with a free account</p>
          <form onSubmit={this.handleSubmit} className="session-form">
            {
              this.props.formName === "Sign up" ?
                <TextInput
                  className='sesh-input'
                  name='Username'
                  value={this.state.username}
                  onChange={this.update('username')}
                  errors={this.props.errors.usernameError}
                /> :
                null
            }
            <TextInput
              className='sesh-input'
              name='Email'
              value={this.state.email}
              onChange={this.update('email')}
              errors={this.props.errors.emailError}
            />
            <TextInput
              type='password'
              className='sesh-input'
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
