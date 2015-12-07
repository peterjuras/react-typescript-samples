import * as React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainComponent from './components/MainComponent';
import User from './model/user.ts';
import Movie from './model/movie.ts';
import Director from './model/director.ts';

injectTapEventPlugin();

const users = [
  new User('Peter', [
    new Movie('Ant-Man',
      new Director('Peyton Reed')),
    new Movie('The Martian',
      new Director('Ridley Scott')),
    new Movie('Guardians of the Galaxy',
      new Director('James Gunn')),
    new Movie('The Maze Runner',
      new Director('Wes Ball')),
    new Movie('Tomorrowland',
      new Director('Brad Bird'))
  ]),
  new User('Max', [
    new Movie('Deadpool',
      new Director('Tim Miller')),
    new Movie('Ex Machina',
      new Director('Alex Garland')),
    new Movie('The Good Dinosaur',
      new Director('Peter Sohn')),
    new Movie('Inside Out',
      new Director('Pete Docter')),
    new Movie('Home Alone',
      new Director('Chris Columbus'))
  ]),
];

render(<MainComponent title="Movies" users={users} />, document.getElementById('content'));
