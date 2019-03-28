import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    renderErrors() {

    }

    usernameConditional() {
        if (this.props.formName === "Sign up") {
            return (
                <div>
                    <input type="text"
                        className="sesh-input"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.update('username')} />
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        const usernameInput = this.usernameConditional();
        return (
            <div className="session-page">
                <div className="session-link-box">
                    {this.props.otherForm}
                </div>
                <div className="session-form-box">
                    <h2>{this.props.formName} to see more</h2>
                    <p>Access Pintrigue's best ideas with a free account</p>
                    <form onSubmit={this.handleSubmit} className="session-form">
                        {usernameInput}
                        <input className="sesh-input" type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        <br />
                        <input className="sesh-input" type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                        <br />
                    </form>
                    <button className="sesh-submit" onClick={this.handleSubmit}>{this.props.formName}</button>
                    <button className="sesh-submit" onClick={this.handleDemo}>Demo</button>
                </div>
            </div>
        )
    }
}

export default SessionForm;