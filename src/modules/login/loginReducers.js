import { FB_LOGIN, FB_LOGOUT, FB_GET_STATUS } from './loginActions';
import reduceReducers from 'reduce-reducers';

const initialState = {
  fbAccessToken: '',
  fbLoggingIn: false,
  fbLoggingOut: false
};

const fbLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FB_LOGIN}_PENDING`:
      return { ...state, fbLoggingIn: true };
    case `${FB_LOGIN}_FULFILLED`:
      return {
        fbAccessToken: action.payload.authResponse.accessToken,
        fbLoggingIn: false
      };
    case `${FB_LOGIN}_REJECTED`:
      return { fbAccessToken: '', fbLoggingIn: false };
    default:
      return state;
  }
};

const fbLogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FB_LOGOUT}_PENDING`:
      return { ...state, fbLoggingOut: true };
    case `${FB_LOGOUT}_FULFILLED`:
    case `${FB_LOGOUT}_REJECTED`:
      return { ...state, fbAccessToken: '', fbLoggingOut: false };
    default:
      return state;
  }
};

const loginReducer = reduceReducers(fbLoginReducer, fbLogoutReducer);

export default loginReducer;
