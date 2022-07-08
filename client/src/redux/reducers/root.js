import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  user: authReducer,
  menu: menuReducer,
});

export default rootReducer;
