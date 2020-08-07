import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Photo from './Photo';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Photo name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));