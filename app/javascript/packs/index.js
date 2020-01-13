import React from "react";
import { render } from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRoute as Route, Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import Display from "../components/Display";

const initialState = {
  talks: [{}],
  current_user: {}
}

const boo = {
  talks: [
    {
      id: 1,
      title: 'ReactJS',
      description: 'Some talk about react! bla bla bla bla bla',
      speakers: [
        'John Doe'
      ],
      location: 'New York City, NY'
    },
    {
      id: 2,
      title: 'Ruby on Rails',
      description: 'Some talk about Rails! Rails Rails Rails Rails Rails Rails',
      speakers: [
        'Michael Hartl'
      ],
      location: 'Texas, TX'
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Some talk about JavaScript! JavaScript ES6 ES5 ES7 ES8 Frameworks...',
      speakers: [
        'JS Dude',
        'James Bond'
      ],
      location: 'Los Angeles, CA'
    },
  ],
  current_user: {
    id: 1,
    email: 'example@email.com',
    created_at: null,
    updated_at: null,
  }
}

const store = createStore(rootReducer, initialState);



document.addEventListener("DOMContentLoaded", () => {
  render(
    <Display store={store} />,
    document.body.appendChild(document.createElement("div"))
  );
});
