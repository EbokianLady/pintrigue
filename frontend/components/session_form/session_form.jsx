import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.formatErrors = this.formatErrors.bind(this);
  }
  
  componentDidUpdate() {
    const inputs = document.querySelectorAll('input');
    const errors = this.formatErrors();
    for (let i=0; i < inputs.length; i++) {
      if (errors[inputs[i].alt]) {
        inputs[i].className = "sesh-input invalid-input";
      } else {
        inputs[i].className = "sesh-input";
      }
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  formatErrors() {
    let errors = {};
    this.props.errors.forEach(err => {
      errors[err[0]] = err;
    });
    return errors;
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
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // dummy action that makes state 'change' triggers 

  // react events onSubmit onChange onSelect onFocus onUnfocus
  // react component library (form) - infinite scroll 
  // bootstrap material view
  // medium

  renderErrors(errors, field) {
    if (errors[field]) {
      return (
        <div className="session-errors" >
          {errors[field]}
        </div>
      )
    } 
  }

  usernameConditional() {
    const errors = this.formatErrors();
    if (this.props.formName === "Sign up") {
      return (
        <div>
          <input type="text"
            className="sesh-input" alt="U"
            placeholder="Username"
            value={this.state.username}
            onChange={this.update('username')} />
          <br />
          {this.renderErrors(errors, "U")}
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const usernameInput = this.usernameConditional();
    const errors = this.formatErrors();
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
            {usernameInput}
            <input className="sesh-input" alt="E" type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')} />
            <br />
            {this.renderErrors(errors, "E")}
            <input className="sesh-input" alt="P" type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')} />
            {this.renderErrors(errors, "P")}
            {this.renderErrors(errors, "I")}
          </form>
          <button className="sesh-submit" onClick={this.handleSubmit}>{this.props.formName}</button>
          <button className="sesh-submit" onClick={this.handleDemo}>Demo</button>
        </div>
      </div>
    )
  }
}

export default SessionForm;