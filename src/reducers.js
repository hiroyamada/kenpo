import { combineReducers } from 'redux';
import { changesReducer } from './modules/changes';
import { loginReducer } from './modules/login';

const reducer = combineReducers({
  changes: changesReducer,
  login: loginReducer
});

export default reducer;
