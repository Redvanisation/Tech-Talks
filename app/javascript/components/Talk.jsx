import React from 'react';
import PropTypes from 'prop-types';

class Talk extends React.Component {
  handleClick(id) {
    fetch(`api/v1/fav_talks/${id}`, {
      method: 'put',
      body: id,
    });
    const { handleFav } = this.props;
    handleFav(id);
  }

  render() {
    const { talk, handleFav } = this.props;
    return (
      <div>
        <h3>{talk.title}</h3>
        <p>{talk.description}</p>
        <p>{talk.speakers}</p>
        <p>{talk.location}</p>
        {handleFav
          ? <button type="button" onClick={() => this.handleClick(talk.id)}>Add as fav</button>
          : ''}
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
