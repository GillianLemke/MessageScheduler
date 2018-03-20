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
    return fetch('/api/login/${username}/')
      .then(
          response => response.json(),
          error => dispatch(loginFailed(error)),
        )
        .then(json =>
          dispatch(loginSuccessful(username))
        )
  }
}
