/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favTalks } from '../actions/index';
import Talk from '../components/Talk';

class FavTalks extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { favTalks } = this.props;
    setTimeout(() => {
      fetch('api/v1/fav_talks')
        .then(res => res.json())
        .then(data => favTalks(data));
    }, 10);
  }

  render() {
    const { userTalks } = this.props;
    const favs = userTalks
      ? userTalks.map((talk, i) => <Talk key={i} talk={talk} />)
      : 'No fav talks yet';

    return (
      <div>
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
  favTalks: PropTypes.instanceOf(Function).isRequired,
  userTalks: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavTalks);
