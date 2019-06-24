import React from 'react';
import axios from 'axios';

export default class GitHubUser extends React.Component
 {
  state = {
    persons: []
          }

  componentDidMount() 
  {
    axios.get(`https://api.github.com/users`)
      .then(res => {
        console.log(res)
        this.setState({persons: res.data });
      })
  }
 render() 
 {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.login} </li>)}
      </ul>

    )
  }
}
