require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let bgImage = require('../images/6.jpg');

class AppComponent extends React.Component {
  constructor (props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad () {

  }

  render() {
    return (
      <section className="box" ref="box" onLoad={this.handleLoad}>
        <img src={bgImage} id="img-back" />
        <img src={bgImage} id="img-face" />
        <div id="main">
          <div className="minDiv left-up"></div>
          <div className="minDiv up"></div>
          <div className="minDiv right-up"></div>
          <div className="minDiv right"></div>
          <div className="minDiv right-down"></div>
          <div className="minDiv down"></div>
          <div className="minDiv left-down"></div>
          <div className="minDiv left"></div>
        </div>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
