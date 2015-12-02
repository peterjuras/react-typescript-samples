import _ from 'lodash';

var User = function(name, movies) {
  this.id = _.uniqueId('user');
  this.name = name;
  this.movies = movies;
}

export default User;
