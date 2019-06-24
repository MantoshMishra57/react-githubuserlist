import React, { Component } from 'react';
import { render } from 'react-dom';
import GitHubUser from './GitHubUser';

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
        <GitHubUser />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
