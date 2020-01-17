/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaArrowCircleRight, FaRegBuilding, FaUserTie, FaDotCircle,
} from 'react-icons/fa';


class Talk extends React.Component {
  handleClick(id) {
    const { handleFav } = this.props;
    handleFav(id);
  }

  render() {
    const { talk } = this.props;
    return (
      <div className="app__talk pt-4 pb-3 pl-3 pl-sm-4 pl-md-5 pr-2 pr-sm-4 pr-md-5 m-2 m-sm-3 m-md-5 mb-5 mb-sm-4 mb-md-3">
        <div className="app__talk--date-time">
          <FaDotCircle className="app__talk--date-time-icon" /> {talk.date} | {talk.start_time} - {talk.end_time}
        </div>
        <Link to={`/${talk.id}`}>
          <h3 className="app__talk--title">{talk.title}</h3>
        </Link>
        <div className="app__talk--subcontent-div">
          <p className="app__talk--speakers mt-3">
            <FaUserTie className="app__talk--icon mr-3" />
            {talk.speakers}
          </p>
          <p className="app__talk--location">
            <FaRegBuilding className="app__talk--icon" />
            {talk.location}
          </p>
          <Link to={`/${talk.id}`}>
            <FaArrowCircleRight className="app__talk--button" />
          </Link>
        </div>
      </div>
    );
  }
}

Talk.defaultProps = {
  title: 'Talk title',
  description: 'Talk Description',
  speakers: 'Talk Speaker',
  location: 'Talk Location',
};

Talk.propTypes = {
  talk: PropTypes.instanceOf(Object).isRequired,
  // eslint-disable-next-line react/require-default-props
  handleFav: PropTypes.instanceOf(Function),
  title: PropTypes.string,
  description: PropTypes.string,
  speakers: PropTypes.string,
  location: PropTypes.string,
};

export default Talk;
