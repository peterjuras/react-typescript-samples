import _ from 'lodash';
import Director from './director';

export default class Movie {
  constructor(name, director) {
    this.id = _.uniqueId('movie');
    this.name = name;
    this.director = director;
  }

  id: string;
  name: string;
  director: Director;
}
