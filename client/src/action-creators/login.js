import {
  LOGIN_LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL
} from '../constants/action-types.js';
import $ from 'jquery';

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


const test = (username, password) => {

  return $.ajax({
    type: 'GET',
    url: `http://localhost:3001/api/user`,
    data: {username: username, password: password},
    async: false,
    crossDomain: true,
    beforeSend: function (xhr) {
      if (xhr && xhr.overrideMimeType) {
        xhr.overrideMimeType('application/json;charset=utf-8');
      }
    },
    dataType: 'json',
    success: function (data) {
      console.log(data);
    }
  });
}

export const loginRequest = (username, password) => {
  return dispatch => {
    dispatch(loginLoading());
    return test(username, password)
      .then(response => response.json())
      .then(json => dispatch(loginSuccessful(username)))
      .catch(error => {
        return dispatch(loginFailed(error));
      });
  }
}
