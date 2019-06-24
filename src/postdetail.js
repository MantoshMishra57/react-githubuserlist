import React from 'react';


export default class PostDetail extends React.Component 
{
  render() {
    return (
      <div>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
    </div>
    );
  }
}
