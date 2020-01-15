/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';

class Users extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    fetch('api/v1/the_users')
      .then(res => res.json())
      .then(data => getUser(data));
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        { currentUser ? (
          <h5>
            Logged in as:
            {' '}
            {currentUser.email}
          </h5>
        ) : 'No current user yet'}
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
