import { uniqueId } from 'lodash';

class User {
  constructor(name, movies) {
    this.id = uniqueId('user');
    this.name = name;
    this.movies = movies;
  }
}

export default User;
