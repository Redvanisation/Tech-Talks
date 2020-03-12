/* eslint-disable arrow-parens */
const GET_TALKS = 'GET_TALKS';
const GET_FAVS = 'GET_FAVS';
const GET_USER = 'GET_USER';

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

export {
  getTalks, getFavs, getUser,
};
