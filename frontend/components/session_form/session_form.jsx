import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    usernameConditional() {
        if (this.props.formName === "Sign up") {
            return (
                <div>
                    <input type="text"
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
            <div>
                <div className="session-links">
                    <Link to={this.props.link} >{this.props.linkName}</Link>
                </div>
                <div className="session-form-box">
                    <h2>{this.props.formName} to see more</h2>
                    <p>Access Pintrigue's best ideas with a free account</p>
                    <form onSubmit={this.handleSubmit}>
                        {usernameInput}
                        <input type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        <br />
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                        <br />
                        <input type="Submit" value={this.props.buttonName} readOnly />
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;