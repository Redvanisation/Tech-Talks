/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TalksList from '../containers/TalksList';
import SingleTalk from './SingleTalk';
import FavTalks from '../containers/FavTalks';
import { getFavs } from '../actions/index';
import { hide, fetchData } from '../helpers/helpers';

class App extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.getData();
    hide();
  }

  getData() {
    const { favoriteTalks } = this.props;

    fetchData('api/v1/fav_talks', favoriteTalks);
  }

  refresh() {
    window.location.reload();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/" component={TalksList} />
            <Switch>
              <Route path="/fav_talks" render={(props) => <FavTalks {...props} getData={this.getData} />} />
              <Route path="/:id" render={(props) => <SingleTalk {...props} refresh={this.refresh} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTalks: state.talks,
  favs: state.favTalks,
});

const mapDispatchToProps = (dispatch) => ({
  favoriteTalks: (talks) => dispatch(getFavs(talks)),
});

App.propTypes = {
  favoriteTalks: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
