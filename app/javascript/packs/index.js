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
  currentUser: {},
  favTalks: [{}],
}

const boo = {
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
