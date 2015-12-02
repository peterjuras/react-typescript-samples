import * as React from 'react';
import _ from 'lodash';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import MovieCard from './MovieCard';
import User from '../model/user';

export default class UserCard extends React.Component<{ user: User, key?: string }, {}> {
  render() {
    const movies = _(this.props.user.movies).map(mov =>
      <td key={mov.id}><MovieCard movie={mov} tag={mov.name} /></td>
    ).value();
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
}
