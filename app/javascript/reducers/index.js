import { combineReducers } from 'redux';
import talksReducer from './talksReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  talks: talksReducer,
  current_user: userReducer,
});

export default rootReducer;
