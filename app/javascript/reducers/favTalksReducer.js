const favTalksReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_FAVS':
      return action.payload;

    default:
      return state;
  }
};

export default favTalksReducer;
