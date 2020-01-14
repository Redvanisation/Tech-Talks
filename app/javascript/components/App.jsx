/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TalksList from '../containers/TalksList';
import Users from '../containers/Users';
import FavTalks from '../containers/FavTalks';
import BackButton from './buttons/BackButton';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BackButton />
          <Route exact path="/" component={TalksList} />
          <Route path="/fav_talks" component={FavTalks} />

        </div>
      </Router>
          // <Users />
    );
  }
}

export default App;
