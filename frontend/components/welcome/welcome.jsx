import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
    if (props.currentUser.id) {
        return (
            <div>
                <h3>Welcome, {props.currentUser.username}</h3>
                <button onClick={props.logout}>Logout</button>
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
};

export default Welcome;