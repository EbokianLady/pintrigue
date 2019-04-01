import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { user } = this.props;
    return (
      <div>User Edit</div>
    )
  }
}

export default UserEdit;
