/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';

class Users extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    fetch('api/v1/the_users#fav_talks')
      .then(res => res.json())
      .then(data => getUser(data));
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        { currentUser ? (
          <h3>
            current user:
            {' '}
            {currentUser.email}
          </h3>
        ) : 'No current user yet'}
        {/* {console.log(this.props)} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(getUser(user)),
});

Users.propTypes = {
  getUser: PropTypes.instanceOf(Function).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
