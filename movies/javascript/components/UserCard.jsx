import React from 'react';
import _ from 'lodash';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import MovieCard from './MovieCard.jsx!';

var UserCard = React.createClass({
  render: function() {
    var movies = _(this.props.user.movies).map(function (mov) {
      return <td key={mov.id}><MovieCard movie={mov} tag={mov.name} /></td>;
    }).value();
    return (
      <Card className="user-card">
        <CardHeader
          title={this.props.user.name}
          avatar={<Avatar>{this.props.user.name.charAt(0).toUpperCase()}</Avatar>} />
        <table>
          <tbody>
            <tr>{movies}</tr>
          </tbody>
        </table>
      </Card>
    );
  }
})

export default UserCard;
