import React, { Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

class MovieCard extends Component {
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

export default MovieCard;
