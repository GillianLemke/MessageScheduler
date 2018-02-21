import * as ActionTypes from '../constants/action-types.js';

const initialState = {
  username: null,
  loggedin: false,
  isLoading: false,
  error: undefined,
}

const LoginReducer = (state = initialState, action) => {
  console.log('state');
  console.log(state);
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING:
      return {
        isLoading: true,
        ...initialState,
      }
    case ActionTypes.LOGIN_FAILED:
      return {
        ...initialState,
        error: state.error,
      }
    case ActionTypes.LOGIN_SUCCESSFUL:
      return {
        username: state.username,
        loggedin: true,
        ...initialState,
      }
    default:
      return state;
  }
}

export default LoginReducer;
