/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTalks, favTalks } from '../actions/index';
import Talk from '../components/Talk';
import Users from './Users';
import FavsButton from '../components/buttons/FavsButton';

class TalksList extends Component {
  componentDidMount() {
    const { getTalks } = this.props;
    fetch('api/v1/talks')
      .then(res => res.json())
      .then(data => getTalks(data));
  }

  handleFav(id) {
    fetch(`api/v1/fav_talks/${id}`, {
      method: 'put',
      body: id,
    });
  }

  render() {
    const { talks } = this.props;
    const allTalks = (talks)
      ? talks.map((talk, i) => (
        <Talk
          key={i}
          talk={talk}
          talks={talks}
        />
      ))
      : <p>Talks loading</p>;
    return (
      <div className="app__talks-list">
        <Users />
        <header className="talks__header pb-4">
          <h2 className="talks__header--title font-weight-bold ml-5">Talks List</h2>
        </header>
        {allTalks}
        <FavsButton />
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

TalksList.propTypes = {
  getTalks: PropTypes.instanceOf(Function).isRequired,
  talks: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TalksList);
