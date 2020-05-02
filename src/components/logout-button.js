import React from 'react';
import { logout } from '../helpers/user-helper';
import { navigate } from 'gatsby';

export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    logout(navigate);
  }

  render() {
    return (
      <p>
        <button onClick={this.logout}>Logout</button>
      </p>
    );
  }
}