import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

var MovieCard = React.createClass({
  render: function() {
    return (
      <Card className="movie-card">
        <CardMedia overlay={<CardTitle
            title={this.props.movie.name}
            subtitle={this.props.movie.director.getStyledName()} />}>
          <img src={'../../static/images/movies/' + this.props.movie.name + '.jpg'} />
        </CardMedia>
      </Card>
    );
  }
});

export default MovieCard;
