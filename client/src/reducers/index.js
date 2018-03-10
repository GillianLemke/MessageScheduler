import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as ActionTypes from '../constants/action-types.js';

const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case ActionTypes.LOGIN_SUCCESSFUL:
      localStorage.setItem( 'username', action.username );
      return {
        ...state,
        isLoading: false,
        username: action.username,
        loggedin: true,
      }
    case ActionTypes.GET_MESSAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.GET_MESSAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case ActionTypes.GET_MESSAGES_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        messages: action.messages,
      }
    case ActionTypes.ADD_NEW_MESSAGE_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.ADD_NEW_MESSAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case ActionTypes.ADD_NEW_MESSAGE_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return { ...state };
  }
}



export default combineReducers({
  routing: routerReducer,
  data: appReducer,
});
