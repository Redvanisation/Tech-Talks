/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { BrowserRoute, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import Demo from './Demo';
import TalksList from '../containers/TalksList';
import Users from '../containers/Users';

class App extends Component {
  render() {
    return (
      <div>
        <TalksList />
        {/* <Users /> */}
      </div>
    );
  }
}

export default App;
