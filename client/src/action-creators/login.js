import {
  LOGIN_LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL
} from '../constants/action-types.js';

const loginLoading = () => ({
  type: LOGIN_LOADING,
});

const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

const loginSuccessful = (username) => ({
  type: LOGIN_SUCCESSFUL,
  username,
});

export const loginRequest = (username, password) => {
  return dispatch => {
    dispatch(loginLoading());
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(username => dispatch(loginSuccessful(username)))
      .catch(error => dispatch(loginFailed(error)))
  }
}
