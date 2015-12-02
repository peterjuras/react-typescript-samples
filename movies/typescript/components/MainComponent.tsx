import * as React from 'react';
import _ from 'lodash';
import AppBar from 'material-ui/lib/app-bar';
import UserCard from './UserCard';
import User from '../model/user';

export default class MainComponent extends React.Component<{ users: User[], title: string }, {}> {
  render() {
    const users = _(this.props.users).map(user => <UserCard user={user} key={user.id}/>).value();
    return (
      <div>
        <AppBar title={this.props.title} showMenuIconButton={false}/>
        {users}
      </div>
    );
  }
}
