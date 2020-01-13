/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { BrowserRoute, Route, Switch } from 'react-router-dom';
import TalksList from '../containers/TalksList';
import Users from '../containers/Users';
import FavTalks from '../containers/FavTalks';

class App extends Component {
  render() {
    return (
      <div>
        <TalksList />
        <Users />
        <hr />
        <FavTalks />
      </div>
    );
  }
}

export default App;
