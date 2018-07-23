import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'material-icons/iconfont/material-icons.css';

const Header = styled.header.attrs({
  className: 'App-header',
})``;

const Button = styled.button.attrs({
  className: 'waves-effect waves-light btn',
})``;

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increment-button">Increment counter</button>
      </div>
    );
  }
}

export default App;
