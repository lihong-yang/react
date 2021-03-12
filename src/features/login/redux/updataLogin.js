// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  LOGIN_UPDATA_LOGIN,
} from './constants';

export function updataLogin(payload) {
  return {
    type: LOGIN_UPDATA_LOGIN,
    payload
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN_UPDATA_LOGIN:
      return {
        ...state,
        isLogin:action.payload
        
      };
    default:
      return state;
  }
}
