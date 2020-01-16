import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import Display from "../containers/Display";
import '../../assets/stylesheets/main.scss';

const initialState = {
  talks: [{}],
  currentUser: {},
  favTalks: [{}],
}

const store = createStore(rootReducer, initialState);



document.addEventListener("DOMContentLoaded", () => {
  render(
    <Display store={store} />,
    document.body.appendChild(document.createElement("div"))
  );
});
