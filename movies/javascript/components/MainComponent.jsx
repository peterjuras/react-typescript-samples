import React from 'react';
import _ from 'lodash';
import AppBar from 'material-ui/lib/app-bar';
import UserCard from './UserCard.jsx!';

var MainComponent = React.createClass({
  render: function() {
    var users = _(this.props.users).map(function (user) {
      return <UserCard user={user} key={user.id} />
    }).value();
    return (
      <div>
        <AppBar title="Movies" showMenuIconButton={false} />
        {users}
      </div>
    );
  }
});

export default MainComponent;
