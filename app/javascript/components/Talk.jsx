import React, { Component } from 'react';

class Talk extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.talk.title}</h3>
        <p>{this.props.talk.description}</p>
      </div>
    );
  }
}

export default Talk;
