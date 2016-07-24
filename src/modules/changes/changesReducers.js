import { GET_CHANGES, LIKE_CHANGE } from './changesActions';
import merge from 'lodash/merge';
import update from 'react-addons-update';
import reduceReducers from 'reduce-reducers';

const initialState = {
  isLoading: false,
  items: {}
};

const getChangesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CHANGES}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_CHANGES}_FULFILLED`:
      return {
        items: merge(state.items, action.payload.entities.change),
        isLoading: false
      };
    case `${GET_CHANGES}_REJECTED`:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LIKE_CHANGE}_PENDING`:
      return update(state, { items: { [action.meta.changeId]: { isLiking: { $set: true } } } });
    case `${LIKE_CHANGE}_FULFILLED`:
      return update(state,
        {
          items: {
            [action.meta.changeId]: {
              $set: {
                ...action.payload.change,
                liked: true,
                isLiking: false
              }
            }
          }
        });
    case `${LIKE_CHANGE}_REJECTED`:
      return update(state, { items: { [action.meta.changeId]: { isLiking: { $set: false } } } });
    default:
      return state;
  }
};

const changesReducer = reduceReducers(getChangesReducer, likesReducer);

export default changesReducer;
