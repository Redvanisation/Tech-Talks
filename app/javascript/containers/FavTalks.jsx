import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFavs } from '../actions/index';
import BackButton from '../components/buttons/BackButton';
import Talk from '../components/Talk';

const FavTalks = ({ userTalks }) => (
  <>
    <header className="d-flex talks__header pb-4 pt-2 mb-5">
      <BackButton />
      <h2 className="talks__header--title font-weight-bold ml-2">Favorite Talks</h2>
    </header>
    <ul className="talks__body">
      {userTalks
        ? userTalks.map((talk) => <Talk key={talk.id} talk={talk} />)
        : 'No fav talks yet'}
    </ul>
  </>
);


const mapStateToProps = (state) => ({
  userTalks: state.favTalks,
});

const mapDispatchToProps = (dispatch) => ({
  favorites: (talks) => dispatch(getFavs(talks)),
});

FavTalks.propTypes = {
  userTalks: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavTalks);
