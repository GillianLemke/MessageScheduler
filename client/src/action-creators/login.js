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
  console.log('in login action');
  return dispatch => {
    dispatch(loginLoading());
    return fetch(`/api/user/${username}/${password}`)
      .then(response => response.json())
      .then(json => dispatch(loginSuccessful(username)))
      .catch(error => {
        console.log('error', error);
        return dispatch(loginFailed(error));
      });
  }
}
