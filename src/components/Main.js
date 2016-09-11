require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

let bgImage = require('../images/6.jpg');

// 获取元素相对于屏幕左边和上边的距离
let getPosition = (node) => {
  let left = node.offsetLeft;
  let top = node.offsetTop;
  let parent = node.offsetParent;
  while (parent !== null) {
    left += parent.offsetLeft;
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return {
    left: left,
    top: top
  };
};

class AppComponent extends React.Component {
  constructor (props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad () {
    let right = ReactDOM.findDOMNode(this.refs.right),
      up = ReactDOM.findDOMNode(this.refs.up),
      down = ReactDOM.findDOMNode(this.refs.down),
      left = ReactDOM.findDOMNode(this.refs.left),
      leftup = ReactDOM.findDOMNode(this.refs.leftup),
      rightup = ReactDOM.findDOMNode(this.refs.rightup),
      rightdown = ReactDOM.findDOMNode(this.refs.rightdown),
      leftdown = ReactDOM.findDOMNode(this.refs.leftdown),
      main = ReactDOM.findDOMNode(this.refs.main),
      keyDown = false,
      contact;

    let rightMove = (e) => {
      let x = e.clientX,
        beforeW = main.offsetWidth - 2,
        addW = x - getPosition(main).left - beforeW;
      main.style.width = addW + beforeW + 'px';
    };
    let upMove = (e) => {
      let y = e.clientY,
        addH = getPosition(main).top - y,
        beforeH = main.offsetHeight - 2;
      main.style.height = addH + beforeH + 'px';
      main.style.top = main.offsetTop - addH + 'px';
    };
    let leftMove = (e) => {
      let x = e.clientX,
        addW = getPosition(main).left - x,
        beforeW = main.offsetWidth - 2;
      main.style.width = addW + beforeW + 'px';
      main.style.left = main.offsetLeft - addW + 'px';
    };
    let downMove = (e) => {
      let y = e.clientY,
        beforeH = main.offsetHeight - 2,
        addW = y - getPosition(main).top - beforeH;
      main.style.height = addW + beforeH + 'px';
    };
    right.onmousedown = () => {
      keyDown = true;
      contact = 'right';
    };
    up.onmousedown = () => {
      keyDown = true;
      contact = 'up';
    };
    left.onmousedown = () => {
      keyDown = true;
      contact = 'left';
    };
    down.onmousedown = () => {
      keyDown = true;
      contact = 'down';
    };
    leftup.onmousedown = () => {
      keyDown = true;
      contact = 'leftup';
    };
    leftdown.onmousedown = () => {
      keyDown = true;
      contact = 'leftdown';
    };
    rightup.onmousedown = () => {
      keyDown = true;
      contact = 'rightup';
    };
    rightdown.onmousedown = () => {
      keyDown = true;
      contact = 'rightdown';
    };
    window.onmouseup = () => {
      keyDown = false;
    };
    window.onmousemove = (e) => {
      if (keyDown) {
        switch (contact) {
          case 'right' : rightMove(e); break;
          case 'up' : upMove(e); break;
          case 'left' : leftMove(e); break;
          case 'down' : downMove(e); break;
          case 'leftup' : leftMove(e); upMove(e); break;
          case 'leftdown': leftMove(e); downMove(e); break;
          case 'rightup' : rightMove(e); upMove(e); break;
          case 'rightdown' : rightMove(e); downMove(e); break;
        }
      }
    }
  }

  render() {
    return (
      <section className="box" ref="box" onLoad={this.handleLoad}>
        <img src={bgImage} id="img-back" />
        <img src={bgImage} id="img-face" />
        <div id="main" ref="main">
          <div className="minDiv left-up" ref="leftup"></div>
          <div className="minDiv up" ref="up"></div>
          <div className="minDiv right-up" ref="rightup"></div>
          <div className="minDiv right" ref="right"></div>
          <div className="minDiv right-down" ref="rightdown"></div>
          <div className="minDiv down" ref="down"></div>
          <div className="minDiv left-down" ref="leftdown"></div>
          <div className="minDiv left" ref="left"></div>
        </div>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
