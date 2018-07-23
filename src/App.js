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
      <div>
        <Header>Hello, World!</Header>
        <Button>
          <i className="material-icons left">cloud</i>Click me!
        </Button>

        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="https://materializecss.com/images/office.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Card Title<i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
