import { combineReducers } from 'redux';
import authReducer from './authReducer';
import CheckReducer from './checkReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  user: authReducer,
  menu: menuReducer,
  newCheck: CheckReducer,
});

export default rootReducer;
