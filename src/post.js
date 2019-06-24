import React from 'react';
import axios from 'axios';
import PostDetail from './postdetail';

export default class Post extends React.Component
{
  state = {
    postList : []
  }

  render()
  {
    return(
      <div>
      <h1>post list</h1>
      {this.state.postList.map( r => <PostDetail post={r}></PostDetail>)}
      </div>
    )
  }

  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/posts').
    then(res => this.setState({postList: res.data}))
  }
}
