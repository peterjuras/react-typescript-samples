import * as React from 'react';
import * as ReactDOM from 'react-dom';

const heros = [
  {
    name: 'Rey',
    image: '../../static/images/starwars/rey.png',
    description: 'Rey is a resilient survivor, a scavenger toughened by a lifetime of dealing with the cutthroats of the harsh desert world of Jakku.'
  }, {
    name: 'Kylo Ren',
    image: '../../static/images/starwars/kylo.png',
    description: 'His lightsaber is constructed by himself, a dangerous and ragged design unlike that of a typical lightsaber.'
  }
];

const HeroComponent = props => (
  <div>
    <h1 className="hero-title">{props.name}</h1>
    <div className="hero-panel">
      <div className="hero-img" style={{backgroundImage: `url('${props.image}')`}} />
      <div className="hero-desc">{props.description}</div>
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
      <div className="hero-container">
          <HeroComponent
            name={hero.name}
            image={hero.image}
            description={hero.description} />
          <div className="btn" onClick={this.switchSides}>Switch sides!</div>
      </div>
    );
  }
}

ReactDOM.render(<MainComponent heros={heros} />, document.getElementById('content'));
