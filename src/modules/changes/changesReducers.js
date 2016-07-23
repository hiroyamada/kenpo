import { GET_CHANGES } from './changesActions';

const initialState = {
  isLoading: false,
  items: []
}

const changesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CHANGES}_PENDING`:
      return { ...state, isLoading: true }
    case `${GET_CHANGES}_FULFILLED`:
      return { items: action.payload.changes, isLoading: false }
    case `${GET_CHANGES}_REJECTED`:
      return { ...state, isLoading: false }
    default:
      return state
  }
};

export default changesReducer;
