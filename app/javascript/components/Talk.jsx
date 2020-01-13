import React from 'react';
import PropTypes from 'prop-types';

const Talk = ({ talk }) => (
  <div>
    <h3>{talk.title}</h3>
    <p>{talk.description}</p>
    <p>{talk.speakers}</p>
    <p>{talk.location}</p>
  </div>
);

Talk.defaultProps = {
  title: 'Talk title',
  description: 'Talk Description',
  speakers: 'Talk Speaker',
  location: 'Talk Location',
};

Talk.propTypes = {
  talk: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  speakers: PropTypes.string,
  location: PropTypes.string,
};

export default Talk;
