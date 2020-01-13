const talksReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_TALKS':
      return action.payload;

    case 'FAV_TALK':
      return action.payload;

    default:
      return state;
  }
};

export default talksReducer;
