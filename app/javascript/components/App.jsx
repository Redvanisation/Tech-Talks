/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TalksList from '../containers/TalksList';
import SingleTalk from './SingleTalk';
import FavTalks from '../containers/FavTalks';
import { favTalks } from '../actions/index';
import { hide, fetchData } from '../helpers/helpers';

class App extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    hide();
  }

  getData() {
    const { favoriteTalks } = this.props;

    fetchData('api/v1/fav_talks', favoriteTalks);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/" component={TalksList} />
            <Switch>
              <Route path="/fav_talks" render={(props) => <FavTalks {...props} getData={this.getData} />} />
              <Route path="/:id" component={SingleTalk} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTalks: state.favTalks,
});

const mapDispatchToProps = (dispatch) => ({
  favoriteTalks: (talks) => dispatch(favTalks(talks)),
});

App.propTypes = {
  favoriteTalks: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
