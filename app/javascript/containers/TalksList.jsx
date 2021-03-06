/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTalks, favTalks } from '../actions/index';
import Talk from '../components/Talk';
import Users from './Users';
import FavsButton from '../components/buttons/FavsButton';
import { fetchData, updateData } from '../helpers/helpers';

class TalksList extends Component {
  componentDidMount() {
    const { getTheTalks } = this.props;

    fetchData('api/v1/talks', getTheTalks);
  }

  // eslint-disable-next-line class-methods-use-this
  handleFav(id) {
    updateData('api/v1/fav_talks/', id);
  }

  render() {
    const { talks } = this.props;
    const allTalks = (
      <ul className="talks__body">
        {(talks)
          ? talks.map((talk, i) => (
            <Talk
              key={i}
              talk={talk}
              talks={talks}
            />
          ))
          : <p>Talks loading</p>}
      </ul>
    );

    return (
      <div className="app__talks-list">
        <Users />
        <header className="talks__header pb-4 mb-5">
          <h2 className="talks__header--title font-weight-bold ml-5">Talks List</h2>
        </header>
        {allTalks}
        <FavsButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  talks: state.talks,
  current_user: state.current_user,
});

const mapDispatchToProps = (dispatch) => ({
  getTheTalks: (talks) => dispatch(getTalks(talks)),
  favTalks: (filter) => dispatch(favTalks(filter)),
});

TalksList.propTypes = {
  getTheTalks: PropTypes.instanceOf(Function).isRequired,
  talks: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TalksList);
