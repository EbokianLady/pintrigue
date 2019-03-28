import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.username);
    }

    render() {
        const { user } = this.props;
        if (user) {
            return (
                <div className="user-profile-box">
                    <div className="user-profile">
                    
                    </div>
                    <div className="user-image"></div>
                    {user.username}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default UserProfile;