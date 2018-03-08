import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import LoginReducer from './login.js';
// import MessageReducer from './message.js';
import * as ActionTypes from '../constants/action-types.js';

// const initialState = {
//   username: null,
//   loggedin: false,
//   isLoading: false,
//   error: undefined,
//   messages: null,
// }

const appReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING: {
      console.log('login loading');
      return {
        ...state,
        isLoading: true,
      }
    }
    // break;
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
      // break;
    case ActionTypes.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        username: action.username,
        loggedin: true,
      }
      // break;
    case ActionTypes.GET_MESSAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      }
      // break;
    case ActionTypes.GET_MESSAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
      // break;
    case ActionTypes.GET_MESSAGES_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        messages: action.messages,
      }
      // break;
    default:
      return { ...state };
  }
}



export default combineReducers({
  routing: routerReducer,
  data: appReducer,
});
