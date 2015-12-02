import _ from 'lodash';
import Movie from './movie';

export default class User {
  constructor(name, movies) {
    this.id = _.uniqueId('user');
    this.name = name;
    this.movies = movies;
  }

  id: string;
  name: string;
  movies: Movie[];
}
