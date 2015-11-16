import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/css/bootstrap.css!';
import 'index.css!';

const heros = [
  {
    name: 'Finn',
    image: 'images/Finn.jpg',
    description: 'Finn was a human male who served as a stormtrooper (designation FN-2187) in the First Order approximately thirty years after the Battle of Endor. He was stranded on the desert planet of Jakku. At one point, he used the lightsaber that had once belonged to Jedi Knights Anakin Skywalker and Luke Skywalker. As a stormtrooper, Finn was a trained warrior, but struggled to escape his past. He is plunged into adventure as his consciousness guides him to a heroic path. He eventually engaged in a confrontation with Kylo Ren, an ally of the First Order, in a snowy forest.'
  }, {
    name: 'Kylo Ren',
    image: 'images/Kylo.jpg',
    description: 'The individual who came to be known as Kylo Ren was born some time after the Battle of Endor. As an adult, approximately thirty years later, he had become a follower of the dark side of the Force and a member of the Knights of Ren, taking on Ren as a surname. He built his own lightsaber, a dangerous and ragged design unlike that of a typical lightsaber.\n\nHe was allied with the First Order, a military junta born from the remnants of the Galactic Empire, and he worked under the organization\'s leader, Snoke, a powerful figure in the dark side. Ren desired the destruction of the Resistance (an organization that opposed the First Order) and the Jedi. He engaged in a confrontation with Finn, a former First Order Stormtrooper, in a snowy forest.'
  },
];

const HeroComponent = props => (
  <div className="hero-container">
    <h1 className="hero-title">{props.name}</h1>
    <div className="panel panel-default hero-panel">
      <img className="hero-img" src={props.image} />
      <div className="panel-body hero-desc">{props.description}</div>
    </div>
  </div>
);

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightside: false };
    this.switchSides = this.switchSides.bind(this);
  }
  switchSides() {
    this.setState({
      lightside: this.state.lightside ? false : true
    });
  }
  render() {
    const hero = this.state.lightside ? this.props.heros[0] : this.props.heros[1];
    return (
      <div className="container hero-container">
          <HeroComponent
            name={hero.name}
            image={hero.image}
            description={hero.description} />
          <div className="btn btn-primary" onClick={this.switchSides}>Switch sides!</div>
      </div>
    );
  }
}

ReactDOM.render(<MainComponent heros={heros} />, document.getElementById('content'));
