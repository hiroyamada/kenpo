import { combineReducers } from 'redux'
import { changesReducer } from './modules/changes';

const reducer = combineReducers({
  changes: changesReducer
})

export default reducer;
