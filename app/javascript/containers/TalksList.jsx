/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTalks, favTalks } from '../actions/index';
import Talk from '../components/Talk';

class TalksList extends Component {
  componentDidMount() {
    fetch('api/v1/talks')
      .then(res => res.json())
      .then(data => this.props.getTalks(data));
  }

  render() {
    const talks = (this.props.talks) ? this.props.talks.map(talk => <Talk talk={talk} key={talk.id} />) : <p>Talks loading</p>;
    return (
      <div>
        {talks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  talks: state.talks,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getTalks: talks => dispatch(getTalks(talks)),
  favTalks: filter => dispatch(favTalks(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TalksList);
