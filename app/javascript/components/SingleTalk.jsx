/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FaRegClock, FaRegBuilding, FaPlus, FaUserTie,
} from 'react-icons/fa';
import BackButton from './buttons/BackButton';

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
    const { id } = this.props.match.params;
    fetch(`api/v1/talks/${id}`)
      .then(res => res.json())
      .then(talk => this.setState({
        talk,
      }));
  }

  handleButton() {
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
          <div className="st">
            <header className="st__header pb-5">
              <div className="d-flex">
                <BackButton />
                <h2 className="st__title font-weight-bold">{talk.title}</h2>
              </div>

              <div className="container-fluid">
                <div className="st__contained">
                  <div className="d-flex p-4 st__cont">
                    <div className="st__icon-cont mt-3"><FaRegClock className="st__icon-cont--icon" /></div>
                    <div className="st__date pt-3 pb-3 pr-4 pl-4">
                      <p className="font-weight-bold">Date and time</p>
                      08:00AM - 12:00PM
                      {talk.date}
                    </div>
                  </div>
                  <div className="d-flex p-4">
                    <div className="st__icon-cont mt-3"><FaRegBuilding className="st__icon-cont--icon" /></div>
                    <div className="st__location pt-3 pb-3 pr-4 pl-4">
                      <p className="font-weight-bold">Location</p>
                      {talk.location}
                    </div>
                  </div>
                </div>
                {this.handleButton()
                  ? (
                    <button
                      className="st__button pt-3 pb-3 pl-4 pr-4 mt-3"
                      type="button"
                      onClick={() => this.handleAddFavorite(talk.id)}
                    >
                        Add as fav
                      <FaPlus className="st__button--icon mt-1" />
                    </button>
                  )
                  : ''}
              </div>
            </header>

            <div className="st__bottom st__body p-5">
              <h3 className="font-weight-bold">Description</h3>
              <p>{talk.description}</p>
            </div>

            <div className="st__bottom st__speaker mt-5">
              <h3 className="font-weight-bold st__speaker--title mb-4 ml-5">Speaker</h3>
              <div className="d-flex st__speaker--body-div p-5">
                <FaUserTie className="st__speaker--body-icon mr-3" />
                <p className="st__speaker--body-text">{talk.speakers}</p>
              </div>
            </div>
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
  match: PropTypes.instanceOf(Object).isRequired,
  favoriteTalk: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  favoriteTalk: state.favTalks,
});


export default connect(mapStateToProps)(SingleTalk);
