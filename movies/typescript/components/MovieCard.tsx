import * as React from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Movie from '../model/movie';

export default class MovieCard extends React.Component<{ movie: Movie, tag?: string }, {}> {
  render() {
    return (
      <Card className="movie-card">
        <CardMedia overlay={<CardTitle
            title={this.props.movie.name}
            subtitle={`by ${this.props.movie.director.firstname} ${this.props.movie.director.lastname}`} />}>
          <img src={`../../static/images/movies/${this.props.movie.name}.jpg`} />
        </CardMedia>
      </Card>
    );
  }
}
