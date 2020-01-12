/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { BrowserRoute, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import Demo from './Demo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: null
    };
  }

  componentDidMount() {
    fetch('/api/v1/talks')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    // console.log(this.state.posts)
    return (
      <div>Hello</div>
    );
  }
}

export default App;

