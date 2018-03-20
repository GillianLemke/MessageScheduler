import * as ActionTypes from '../constants/action-types.js';

const initialState = {
  username: null,
  loggedin: false,
  isLoading: false,
  error: undefined,
}

const LoginReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING: {
      console.log('login loading');
      return {
        isLoading: true,
      }
    }
    // break;
    case ActionTypes.LOGIN_FAILED:
      return {
        isLoading: false,
        error: action.error,
      }
      // break;
    case ActionTypes.LOGIN_SUCCESSFUL:
      return {
        isLoading: false,
        username: action.username,
        loggedin: true,
      }
      // break;
    default: {
      console.log("pls no");
      return { ...state };
    }
  }
}

export default LoginReducer;
