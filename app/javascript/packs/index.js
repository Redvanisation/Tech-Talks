/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import Display from '../containers/Display';
import '../../assets/stylesheets/main.scss';

const initialState = {
  talks: [{}],
  favTalks: [{}],
  currentUser: {},
};

const logger = createLogger();

const store = createStore(rootReducer, initialState, applyMiddleware(logger));


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Display store={store} />,
    document.body.appendChild(document.createElement('div')),
  );
});
