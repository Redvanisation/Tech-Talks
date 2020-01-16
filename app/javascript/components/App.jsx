/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TalksList from '../containers/TalksList';
import Users from '../containers/Users';
import SingleTalk from './SingleTalk';
import FavTalks from '../containers/FavTalks';
import BackButton from './buttons/BackButton';
import { favTalks } from '../actions/index';

class App extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { favTalks } = this.props;
    fetch('api/v1/fav_talks')
      .then(res => res.json())
      .then(data => favTalks(data));
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <BackButton />
            <Route exact path="/" component={TalksList} />
            <Switch>
              <Route path="/fav_talks" render={(props) => <FavTalks {...props} getData={this.getData} />} />
              <Route path="/:id" component={SingleTalk} />
            </Switch>
          </div>
        </Router>
        <Users />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userTalks: state.favTalks,
});

const mapDispatchToProps = dispatch => ({
  favTalks: talks => dispatch(favTalks(talks)),
});

App.propTypes = {
  favTalks: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
