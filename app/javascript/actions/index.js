/* eslint-disable arrow-parens */
const GET_TALKS = 'GET_TALKS';
const GET_USER = 'GET_USER';
const FAV_TALK = 'FAV_TALK';
const ADD_FAV = 'ADD_FAV';

const getTalks = talks => ({
  type: GET_TALKS,
  payload: talks,
});

const getUser = user => ({
  type: GET_USER,
  payload: user,
});

const favTalks = filter => ({
  type: FAV_TALK,
  payload: filter,
});

const addFav = fav => ({
  type: ADD_FAV,
  payload: fav,
});

export {
  getTalks, getUser, favTalks, addFav,
};
