import { combineReducers } from 'redux';
import talksReducer from './talksReducer';
import userReducer from './userReducer';
import favTalksReducer from './favTalksReducer';

const rootReducer = combineReducers({
  talks: talksReducer,
  currentUser: userReducer,
  favTalks: favTalksReducer,
});

export default rootReducer;
