import React from 'react';
import * as ActionTypes from '../constants/action-types.js';

const initialState = {
  username: null,
  loggedin: false,
  isLoading: false,
  error: undefined,
}

export default const (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING:
      return: {
        isLoading: true,
        ...initialState,
      }
    case ActionTypes.LOGIN_FAILED:
      return: {
        ...initialState,
        error: 'login failed',
      }
    case ActionTypes.LOGIN_SUCCESSFUL: ({

    })
      return: {
        username: state.username,
        loggedin: true,
        ...initialState,
      }
    default:
      return state;
  }
}
