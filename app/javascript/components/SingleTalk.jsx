/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SingleTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talk: null,
    };
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    let { id } = this.props.match.params;
    fetch(`api/v1/talks/${id}`)
      .then(res => res.json())
      .then(talk => this.setState({
        talk,
      }));
  }

  handleButton() {
    // console.log(this.props)
    const { favoriteTalk } = this.props;
    const { talk } = this.state;

    if (talk && favoriteTalk.some(obj => obj.title === talk.title)) {
      return false;
    }
    return true;
  }

  handleAddFavorite(id) {
    fetch(`api/v1/fav_talks/${id}`, {
      method: 'put',
      body: id,
    });
    const { history } = this.props;
    history.push('/fav_talks');
  }

  render() {
    const { talk } = this.state;
    return (
      <div>
        {talk ? (
          <div>
            <h2>{talk.title}</h2>
            <p>{talk.description}</p>
            <p>{talk.speakers}</p>
            <p>{talk.location}</p>
            <p>{talk.date}</p>
            {this.handleButton()
              ? (
                <button
                  type="button"
                  onClick={() => this.handleAddFavorite(talk.id)}
                >
                    Add as fav
                </button>
              )
              : ''}
          </div>
        )
          : 'No talks yet'}
      </div>
    );
  }
}

SingleTalk.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  // eslint-disable-next-line react/require-default-props
  push: PropTypes.instanceOf(Function),
};

const mapStateToProps = state => ({
  favoriteTalk: state.favTalks,
});



export default connect(mapStateToProps)(SingleTalk);
