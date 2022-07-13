import { combineReducers } from 'redux';
import authReducer from './authReducer';
import billReducer from './billReducer';
import CheckReducer from './checkReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  user: authReducer,
  menu: menuReducer,
  newCheck: CheckReducer,
  bill: billReducer,
});

export default rootReducer;
