/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favTalks } from '../actions/index';
import BackButton from '../components/buttons/BackButton';
import Talk from '../components/Talk';

class FavTalks extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { userTalks } = this.props;
    const favs = userTalks
      ? userTalks.map((talk, i) => <Talk key={i} talk={talk} />)
      : 'No fav talks yet';

    return (
      <div onChange={this.handleChange()}>
        <header className="d-flex talks__header pb-4 pt-2">
          <BackButton />
          <h2 className="talks__header--title font-weight-bold ml-2">Favorite Talks</h2>
        </header>
        {favs}
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

FavTalks.propTypes = {
  userTalks: PropTypes.instanceOf(Object).isRequired,
  getData: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavTalks);
