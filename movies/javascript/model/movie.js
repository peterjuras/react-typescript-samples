import _ from 'lodash';

var Movie = function(name, director) {
  this.id = _.uniqueId('movie');
  this.name = name;
  this.director = director;
}

export default Movie;
