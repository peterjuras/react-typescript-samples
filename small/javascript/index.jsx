import * as React from 'react';
import * as ReactDOM from 'react-dom';

var heros = [
  {
    name: 'Rey',
    image: '../static/images/rey.png',
    description: 'Rey is a resilient survivor, a scavenger toughened by a lifetime of dealing with the cutthroats of the harsh desert world of Jakku.'
  }, {
    name: 'Kylo Ren',
    image: '../static/images/kylo.png',
    description: 'His lightsaber is constructed by himself, a dangerous and ragged design unlike that of a typical lightsaber.'
  }
];

var HeroComponent = function(props) {
  return (
    <div>
      <h1 className="hero-title">{props.name}</h1>
      <div className="hero-panel">
        <div className="hero-img" style={{backgroundImage: 'url(' + props.image + ')'}} />
        <div className="hero-desc">{props.description}</div>
      </div>
    </div>
  );
};

var MainComponent = React.createClass({
  getInitialState: function() {
    return { lightside: false };
  },
  switchSides: function() {
    this.setState({
      lightside: this.state.lightside ? false : true
    });
  },
  render: function() {
    var hero = this.state.lightside ? this.props.heros[0] : this.props.heros[1];
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
});

ReactDOM.render(<MainComponent heros={heros} />, document.getElementById('content'));
