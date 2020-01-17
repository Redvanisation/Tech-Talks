/* eslint-disable arrow-parens */
const GET_TALKS = 'GET_TALKS';
const GET_FAVS = 'GET_FAVS';
const GET_USER = 'GET_USER';
const FAV_TALK = 'FAV_TALK';

const getTalks = talks => ({
  type: GET_TALKS,
  payload: talks,
});

const getFavs = favs => ({
  type: GET_FAVS,
  payload: favs,
});

const getUser = user => ({
  type: GET_USER,
  payload: user,
});

const favTalks = filter => ({
  type: FAV_TALK,
  payload: filter,
});

export {
  getTalks, getFavs, getUser, favTalks,
};
