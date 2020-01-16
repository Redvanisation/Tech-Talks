import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Talk extends React.Component {
  handleClick(id) {
    // fetch(`api/v1/fav_talks/${id}`, {
    //   method: 'put',
    //   body: id,
    // });
    const { handleFav } = this.props;
    handleFav(id);
  }

  render() {
    const { talk, handleFav } = this.props;
    return (
      <div className="app__talk pt-4 pb-3 pl-5 pr-5 m-5">
        <Link to={`/${talk.id}`}>
          <h3 className="app__talk--title">{talk.title}</h3>
        </Link>
        <p className="app__talk--speakers">{talk.speakers}</p>
        <p className="app__talk--location">{talk.location}</p>
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
