import React, { Component } from 'react';
import { render } from 'react-dom';
import GitHubUser from './GitHubUser';
import Post from './post'
class App extends Component {
  render() {
    return (
      <div>
       
        <Post />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
