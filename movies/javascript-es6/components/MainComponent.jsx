import React, { Component } from 'react';
import _ from 'lodash';
import AppBar from 'material-ui/lib/app-bar';
import UserCard from './UserCard.jsx!';

class MainComponent extends Component {
  render() {
    const users = _(this.props.users).map(user => <UserCard user={user} key={user.id}/>).value();
    return (
      <div>
        <AppBar title="Movies" showMenuIconButton={false}/>
        {users}
      </div>
    );
  }
}

export default MainComponent;
