const favTalksReducer = (state = null, action) => {
  switch (action.type) {
    case 'FAV_TALK':
      return action.payload;

    case 'ADD_FAV':
      return action.payload;

    default:
      return state;
  }
};

export default favTalksReducer;
