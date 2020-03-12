import { combineReducers } from 'redux';
import talksReducer from './talksReducer';
import userReducer from './userReducer';
import favTalksReducer from './favTalksReducer';

const rootReducer = combineReducers({
  talks: talksReducer,
  favTalks: favTalksReducer,
  currentUser: userReducer,
});

export default rootReducer;
