import { uniqueId } from 'lodash';

class Movie {
  constructor(name, director) {
    this.id = uniqueId('movie');
    this.name = name;
    this.director = director;
  }
}

export default Movie;
